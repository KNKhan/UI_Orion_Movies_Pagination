import React, {Component} from 'react';
import './Header.css';

const Header = (props) => {
	return (
		<header>
			<div>
				<h2>
					{props.header.title}
				</h2>
				<div className='user'>
					{props.header.user}
				</div>
			</div>
		</header>		
	);
  };
  export default Header;