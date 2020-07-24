import React from "react";
import logo from '../assets/logo.png';
import '../components/Navbar.css';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
  	<div className='nav-bar'>
		<img src={logo} className='logo' alt='thirsty logo' />
		<SearchBar />
		<div>	
			<Link to='/signin'>	
				<button className='nav-button'>Sign In</button>
			</Link>
			<Link to='/signup'>
				<button className='nav-button'>Register</button>
			</Link>
		</div>
	</div>
  )
}

export default NavBar;