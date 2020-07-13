import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
  	<nav className="navbar">
		<div className="container is-fluid">
			<div className="navbar-brand">
			    <a className="navbar-item">
			        <img src="" alt="Thirsty App" />
			     </a>
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