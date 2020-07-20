import React, { useState } from "react";
import Navbar from "./components/Navbar";
import './HomePage.css';
import { useHistory } from 'react-router-dom';

//fetch the yelp data on user click, filter by their location input
function HomePage() {
	const [input, setUserInput] = useState('');

	let history = useHistory();

	//this is where i redirect to the search results page
	const callApi = () => {
		const urlEncodedInput = encodeURI(input);
		history.push(`/search?find_loc=${urlEncodedInput}`);
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