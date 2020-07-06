import React from "react";
import Navbar from "./components/Navbar";
import './HomePage.css';

function HomePage() {
	
	return (
		<div>
			<section class="hero is-link is-fullheight">
			  {/* Hero head: will stick at the top */}
			  <div class="hero-head">
			    <Navbar />
			  </div>

			  <div class="hero-body">
			    <div class="container is-fluid has-text-centered">
			      <h1 class="title">
			        Fullheight title
			      </h1>
			      <h2 class="subtitle">
			        Fullheight subtitle
			      </h2>
			    </div>
			    <div class="columns is-vcentered">

			    </div>	
			  </div>
			</section>
		</div>		
	)	
}

export default HomePage;