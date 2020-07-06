import React from "react";

function NavBar() {
  return (
  	<nav class="navbar">
		<div class="container">
			<div class="navbar-brand">
			    <a class="navbar-item">
			        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
			     </a>
			</div>
			<div class="navbar-menu">
			    <div class="navbar-end">
			        <a class="navbar-item is-active">
			            Home
			        </a>
			        <a class="navbar-item">
			            Examples
			        </a>
			   </div>
			</div>
		</div>
 	</nav>
  )
}

export default NavBar;