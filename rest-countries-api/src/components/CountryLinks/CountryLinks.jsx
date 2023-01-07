import React, {useState, useEffect} from 'react';
import './CountryLinks.css';
import { Link } from 'react-router-dom';

export default function CountryLinks({link, theme}) {
    const[country, setCountry] = useState('');

    const findName = async (code) => {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await res.json();
        setCountry(data[0].name.common);
    }

    useEffect(()=>{
        findName(link)
    }, [])

    return (
        <Link className={`border-link ${theme}`} to={`/${link}`} relative='path'>
            {country}
        </Link>
    )
}