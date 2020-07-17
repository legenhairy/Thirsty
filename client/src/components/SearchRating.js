import React from 'react';
import './SearchRating.css';
import Rating from 'react-rating';

function SearchRating() {
    return (
        <div className='rating'>
            <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                readonly
                initialRating={3}
            />
            <p>500 Reviews</p>
        </div>
    );
}

export default SearchRating;