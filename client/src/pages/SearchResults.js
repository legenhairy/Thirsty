import React from 'react';
import NavBar from '../components/Navbar';
import SearchSettings from '../components/SearchSettings';
import { Link } from 'react-router-dom';

function SearchResults() {
    return (
        <div>
            <NavBar />
            <SearchSettings />
        </div>
    );
}

export default SearchResults;
