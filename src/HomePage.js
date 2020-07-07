import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import './HomePage.css';

//fetch the yelp data on user click, filter by their location input
function HomePage() {
	const [input, setUserInput] = useState('');
	const [businesses, setBusinesses] = useState(null);

	//this is where i make the Yelp API call with the user input
	const callApi = () => {
		const yelpURL = "https://api.yelp.com/v3/businesses/search?categories=bubbletea&location=sf";
		fetch(yelpURL, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': process.env.YELP_API_KEY,
				'Access-Control-Allow-Origin': '*'
			}
		}).then(response => response.json())
		  .then(data => console.log(data));
	}

	//using dynamic name to set the value of field
	const handleOnChange = event => {
		setUserInput(event.target.value);
	}

	return (
		<div>
			<section className="hero is-fullheight bg">
			  {/* Hero head: will stick at the top */}
			  <div className="hero-head">
			    <Navbar />
			  </div>

			  <div className="hero-body">
				  <div class="container has-text-centered is-fluid">	
					<div class="columns is-vcentered">
						<div class="column">
							<p className="title is-1 has-text-black">
								Welcome to Thirsty
							</p>
							<p className="subtitle is-3 has-text-black">
								Look for bubble tea shops near you!

							</p>
						</div>
						<div class="column">
							<nav className="level">	
								<div className="field has-addons">
									<div className="control is-expanded">
										<input className="input" type="text" name="location" 
											placeholder="What's your location"
											value={input} 
											onChange={handleOnChange} 
										/>
									</div>
									<div className="control">
										<input className="button is-success" type="submit" onClick={callApi} value="Submit" />
									</div>
								</div>
							</nav>
						</div>		
					</div>
				  </div>
			  </div>	
			</section>
		</div>		
	)	
}

export default HomePage;