import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import Country from '../../components/Country/Country';
import './Home.css';

export default function Home({theme}) {
    const apiUrl = 'https://restcountries.com/v3.1/all';
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch((error)=>console.log(error))
    },[])

    const countryComps = countries.map(place => <Country key={nanoid()} theme={theme} place={place}/>)

    return (
        <main className='container home'>
            <div className='controls controls-txt'>
                <SearchBar theme={theme}/>
                <Filter theme={theme}/>
            </div>
            <div className='countries-container'>
                {countryComps}
            </div>
        </main>
    )
}
