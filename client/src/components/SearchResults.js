import React from 'react';
import SearchResult from '../components/SearchResult';
import './SearchResults.css';

function SearchResults() {
    return (
        <div className='search-results'>    
            <SearchResult />
            <SearchResult />
        </div>
    );
}

export default SearchResults; 