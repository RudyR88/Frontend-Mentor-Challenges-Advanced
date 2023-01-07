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
    let countryComps = null;
    const isCountry = countries.length >= 1;

    const getCountries = url => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }

    const selectRegion = selected => {
        getCountries(`${baseUrl}/region/${selected}`);
    }

    const searchLocation = location => {
        setSearch(location);
        document.querySelector('.filter').selectedIndex = 0;
    }

    useEffect(()=>{
        
        if(search === ''){
            const apiUrl = baseUrl+'/all';
            getCountries(apiUrl)
        }

        if(search !== ''){
            getCountries(`${baseUrl}/name/${search}`);
        }
        

    },[search]);

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
                { isCountry ? countryComps : <h2 className={theme}>{search === '' ? 'Loading...' : `No countries matching "${search}"`}</h2>}
            </div>
        </main>
    )
}