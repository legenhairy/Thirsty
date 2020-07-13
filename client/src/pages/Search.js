import React from 'react';
import NavBar from '../components/Navbar';
import SearchSettings from '../components/SearchSettings';
import SearchResults from '../components/SearchResults';

function Search() {
    return (
        <div>
            <NavBar />
            <SearchSettings />
            <SearchResults />
        </div>
    );
}

export default Search;
