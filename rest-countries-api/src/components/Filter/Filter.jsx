import React from 'react';
import './Filter.css';

export default function Filter({theme}) {
    return (
        <div className='filter-container'>
            <select className={`filter ${theme}`} aria-label='filter by region' defaultValue=''>
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
