import React from 'react';
import './SearchResult.css';

function SearchResult() {
    return (
        <div className='search-result'>
            <img src='https://via.placeholder.com/150' alt='business' className='business-img' />
            <div className='business-info'>
                <h1 className="title is-4">Bubble Tea Place</h1>
                <p>Rating</p>
                <p>$ <span class="tag">Bubble Tea</span> <span class="tag">Coffee & Tea</span></p>
            </div>
            <div className='contact-info'>
                <p>+49123456789</p>
                <p>Example Street</p>
                <p>12345 San Francisco</p>
            </div>
        </div>
    );
}

export default SearchResult;