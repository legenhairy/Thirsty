import React from "react";
import logo from '../assets/logo.png';
import styles from './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
  	<nav className="navbar">
		<div className="container is-fluid">
			<div className="navbar-brand">
			    <Link to='/'>
					<img src={logo} width="110" height="30" alt='thirsty logo' />	
				</Link>
			</div>
			<div className="navbar-menu">
			    <div className="navbar-end">
			        <Link to="/signin" className="navbar-item">
						Sign In
					</Link>
					<Link to="/signup" className="navbar-item">
						Sign Up
					</Link>
			   </div>
			</div>
		</div>
 	</nav>
  )
}

export default NavBar;