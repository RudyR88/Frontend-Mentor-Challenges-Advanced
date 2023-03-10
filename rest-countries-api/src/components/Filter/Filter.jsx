import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

export default function Filter({theme, selectRegion, search}) {
    return (
        <div className='filter-container'>
            <select className={`filter ${theme}`} 
                aria-label='filter by region' 
                defaultValue='' 
                onChange={e => selectRegion(e.target.value)}
                disabled={search !== '' ? true : false}>
                    <option value='' disabled hidden>Filter by Region</option>
                    <option value='africa'>Africa</option>
                    <option value='america'>America</option>
                    <option value='asia'>Asia</option>
                    <option value='europe'>Europe</option>
                    <option value='oceania'>Oceania</option>
            </select>
        </div>
    )
}

Filter.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark'])
}