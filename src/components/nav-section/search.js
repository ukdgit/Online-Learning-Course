import React from 'react';
import './search-style.css';
// import { useState, useEffect } from 'react';

const Search = (props) => {
    return (
        <nav className="search-input navbar-light bg-light">
            <form className="d-flex">
                <p className="search">Search Courses</p>
                <input className="search-text form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {
                    props.setFilteredCards(event.target.value)}} />
                
            </form>
        </nav>
    )
}

export default Search;
