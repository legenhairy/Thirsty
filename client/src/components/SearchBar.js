import React from 'react';

export default function SearchBar() {
    return ( 
        <div>
            <div className="field has-addons">
                <p className="control">
                    <button class="button is-static is-medium">Near/At</button>
                </p>
                <p className="control">
                    <input className="input is-medium input-control" type="text" placeholder="Where to?" />
                </p>
                <div className="button is-medium is-danger">
                    <span className="icon is-small"><i className="fas fa-search"></i></span>
                </div>
            </div>
        </div>
    )
}