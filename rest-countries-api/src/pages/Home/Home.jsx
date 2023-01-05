import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import Country from '../../components/Country/Country';
import './Home.css';

export default function Home({theme}) {
    const baseUrl = 'https://restcountries.com/v3.1'
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState('');
    const [search, setSearch] = useState('');
    let apiUrl = baseUrl+'/all';

    const selectRegion = selected => {
        setRegion(selected)
    };

    const searchLocation = location => {
        setSearch(location)
    }

    useEffect(()=>{

        if(region !== ''){
            apiUrl = `${baseUrl}/region/${region}`
        }
        
        if(search !== ''){
            apiUrl = `https://restcountries.com/v2/name/${search}`
        }

        console.log(apiUrl)

        fetch(apiUrl)
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch((error)=>console.log(error))
    },[region, search])

    const countryComps = countries.map(place => <Country key={nanoid()} theme={theme} place={place}/>)

    return (
        <main className='container home'>
            <div className='controls controls-txt'>
                <SearchBar theme={theme} searchLocation={searchLocation}/>
                <Filter theme={theme} selectRegion={selectRegion}/>
            </div>
            <div className='countries-container'>
                {countryComps}
            </div>
        </main>
    )
}
