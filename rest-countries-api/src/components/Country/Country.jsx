import React from 'react';
import {Link} from 'react-router-dom';
import './Country.css';

export default function Country({theme, place}) {
    const {flags, name, population, region, capital, cca3} = place;
    
    return (
        <Link to={`/${cca3}`} className={`country ${theme}`}>
            <img className='flag' src={flags.png} alt='' aria-hidden='true'/>
            <div className='country__info'>
                <h3 className='extra-bold'>{name.official !== undefined ? name.official : name}</h3>
                <ul>
                    <li><span>population:</span> {population.toLocaleString("en-US")}</li>
                    <li><span>region:</span> {region}</li>
                    <li><span>capital:</span> {capital}</li>
                </ul>
            </div>
        </Link>
    )
}
