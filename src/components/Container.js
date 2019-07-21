import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import './Container.css';
import Header from './Header.js';
import Search from './Search.js';
import Movie from './Movie.js';
import Pagination from './Pagination.js';

class Container extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			header: {
				title: 'Movie Catalog',
				user: 'Alexander Borisenko'
			},
			s: '',
			page: 1,
			data: [],
			totalResults: null,
			paginations: null,
			pList: []
		};
	}

	getData(str, pageNo) {
		axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=fa281222', { 
			params: { 
				s: str,
				page: pageNo
			}
		})
		.then((res) => {
			var obj = res.data.Search;
			var paginations = Math.ceil(res.data.totalResults/10);
			var tempPlist  = [];
			for(var i=0; i<paginations; i++) {				
				tempPlist.push(i+1);
			}			
			this.setState({data: obj, totalResults: res.data.totalResults, paginations: paginations, pList: tempPlist});
		})
	}

	onChange(value) {
		this.setState({
			s: value
		});
	}

	onClick(value) {
		this.setState({
			page: value
		});
	}
	
	componentDidMount() {		
		this.getData(this.state.s, this.state.page);		
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.page !== this.state.page) {
			this.getData(this.state.s, this.state.page);
		}

		if(prevState.s !== this.state.s) {
			this.getData(this.state.s, this.state.page);
		}				
	}
	
	render() {
		return (
			<div>
				<section className='header'>
					<Header header={this.state.header} />
					<Search onChange={this.onChange.bind(this)} />
				</section>
				<section className='content'>
					<div className='clear'>
						{this.state.s || this.state.totalResults  ?
							<div className='searchinfo'>
								You searched for: <strong>{this.state.s}</strong>, <strong>{this.state.totalResults}</strong> results found
							</div>
							:
							''
						}
					</div>
					<div className='clear'>				
						{this.state.data ?
							<Movie details={this.state.data} />						
							:
							''
						}
					</div>
					<div className='clear'>
						{this.state.pList ?
							<Pagination pages={this.state.pList} onClick={this.onClick.bind(this)} />
							:
							''
						}	
					</div>				
				</section>
			</div>
		);
	}
}
export default Container;