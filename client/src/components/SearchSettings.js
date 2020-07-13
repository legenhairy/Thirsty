import React from 'react';
import './SearchSettings.css';

function SearchSettings() {
    return (
        <div className='settings-container'>
            <div className='search-settings'>
                <h1 className='subtitle'><strong>Nearby Boba Shops in San Francisco</strong></h1>
            </div>
            <div className='filters'>
                <button className="button">
                    <span class="icon"><i class="fab fa-sliders-h"></i></span>
                    <span>All Filters</span>
                </button>
                <div className="buttons has-addons">
                    <button className="button">$</button>
                    <button className="button">$$</button>
                    <button className="button">$$$</button>
                    <button className="button">$$$$</button>
                </div>
                <button className="button">
                    <span class="icon"><i class="fab fa-clock"></i></span>
                    <span>Open Now</span>
                </button>
                <button className="button">
                    <span class="icon"><i class="fab fa-github"></i></span>
                    <span>Curbside Pickup</span>
                </button>
                <button className="button">
                    <span>Yelp Delivery</span>
                </button>
            </div>
        </div> 
    );
}

export default SearchSettings;