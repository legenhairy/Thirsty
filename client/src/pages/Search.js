import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/Navbar';
import SearchSettings from '../components/SearchSettings';
import SearchResults from '../components/SearchResults';

function Search() {
    
    let location = useLocation();
    const params = new URLSearchParams(location.search);
    const locationParam = params.get('find_loc');
    
    return (
        <div>
            <NavBar />
            <SearchSettings location={locationParam} />
            <SearchResults />
        </div>
    );
}

export default Search;
