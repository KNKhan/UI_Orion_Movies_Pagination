import React, {Component} from 'react';
import './Movie.css';
import noimage from './noimage.jpg';


const Movie = (props) => {
	return (
		<div>		
			{props.details.map((item, i) =>
				<div key={i} className='movie'>
					<div>
						<img src={item.Poster != 'N/A' ? item.Poster : noimage}/>
					</div>
					<div>
						<strong>Name:</strong> {item.Title}
					</div>
					<div>
						<strong>Year:</strong> {item.Year}
					</div>
					<div>
						<strong>imdbID:</strong> {item.imdbID}
					</div>
					<div>
						<strong>Type:</strong> {item.Type}
					</div>
				</div>
			)}
		</div>	
	);
  };
  export default Movie;