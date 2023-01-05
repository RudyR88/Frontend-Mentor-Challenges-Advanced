import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import Country from '../../components/Country/Country';
import './Home.css';

export default function Home({theme}) {
    const baseUrl = 'https://restcountries.com/v3.1'
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    let apiUrl = baseUrl+'/all';

    const getCountries = url => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }

    const selectRegion = selected => {
        getCountries(`${baseUrl}/region/${selected}`)
    }

    const searchLocation = location => {
        if(location !== ''){
            getCountries(`https://restcountries.com/v2/name/${location}`)
            document.querySelector('.filter').selectedIndex = 0;
        }
        setSearch(location);
    }

    useEffect(()=>{

        if(search === ''){
            getCountries(apiUrl)
        }

    },[search])

    const isCountry = countries.length >= 1;
    let countryComps = null;

    if(isCountry){
        countryComps = countries.map(place => <Country key={nanoid()} theme={theme} place={place}/>)
    }

    return (
        <main className='container home'>
            <div className='controls controls-txt'>
                <SearchBar theme={theme} searchLocation={searchLocation}/>
                <Filter theme={theme} selectRegion={selectRegion} search={search}/>
            </div>
            <div className='countries-container'>
                { isCountry ? countryComps : <h2 className={theme}>No countries matching "{search}"</h2>}
            </div>
        </main>
    )
}