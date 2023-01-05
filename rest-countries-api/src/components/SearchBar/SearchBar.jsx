import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

export default function SearchBar({theme, searchLocation}) {
    const magnifClr = {
        color: theme === 'light' ? 'hsl(0, 0%, 77%)' : 'inherit',
    }
    
    return (
        <div className={`searchbar ${theme}`}>
            <i className='fa-solid fa-magnifying-glass' style={magnifClr}></i>
            <input id='search' type='text' placeholder='Search for country...' onChange={e => {
                searchLocation(e.target.value.toLocaleLowerCase());
                }}/>
        </div>
    )
}

SearchBar.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark'])
}