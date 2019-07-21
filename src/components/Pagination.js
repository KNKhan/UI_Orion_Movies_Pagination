import React, {Component} from 'react';
import './Pagination.css';

class Pagination extends Component {
    constructor (props) {
        super(props);
    }

    onFieldClick(event) {
		const fieldClick = event.target.textContent;
        this.props.onClick(fieldClick);
    }

    render () {
		return(
			<div className='clear pagination'>
				{this.props.pages != '' ?
					<strong>View Page:</strong>
					:
					''
				}						
				{this.props.pages.map((item, i) =>
					<span key={i} onClick={this.onFieldClick.bind(this)}>{item}</span>
				)}
			</div>
		)
    }
}
export default Pagination;