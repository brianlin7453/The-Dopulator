import React from 'react';
import logo from './logo.png';
import './logo.css';

const Logo = () =>{
	return(
		<div className = "logo"><img style = {{paddingTop:'1px'}}alt='logo' src={logo}/></div> 
	);
}
export default Logo;