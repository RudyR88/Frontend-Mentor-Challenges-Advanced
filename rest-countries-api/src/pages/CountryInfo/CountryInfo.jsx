import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import { useParams, useNavigate } from 'react-router-dom';
import CountryLinks from '../../components/CountryLinks/CountryLinks';
import './CountryInfo.css';

export default function CountryInfo({theme}) {
    let {abbrev} = useParams();
    const [info, setInfo] = useState('');
    const apiUrl = `https://restcountries.com/v3.1/alpha/${abbrev}`;
    const navigate = useNavigate();
    let borderCountries, borders = null;

    const getCountry = async () => {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setInfo(data[0]);
    }

    useEffect(() => {
        getCountry()
        .catch(console.error);;
    }, [abbrev])

    if(info){
        var {flags, name, population, region, subregion, capital, tld, currencies, languages} = info;
        if(info.borders){
            borders = info.borders;
            borderCountries = borders.map(item => <CountryLinks key={nanoid()} link={item} theme={theme}/>);
        }
    }

    return (
        <main className='container countryInfo'>
            <button className={`btn btn--back ${theme}`} onClick={()=>navigate(-1)}><i className='fa-solid fa-arrow-left-long back-arrow'></i>back</button>
            {
                info &&
                <div className='countryInfo__info'>
                    <img className='countryInfo__info__flag' src={flags.png} alt=''/>
                    <div className={`countryInfo__info__about ${theme}-clr`}>
                        <h2>{name.common !== undefined ? name.common : name}</h2>
                        <div>
                            <div className='countryInfo__info__about__specs'>
                                <ul className='cleaned-about-list'>
                                    <li><span>native name:</span> {Object.keys(name.nativeName).map(data => name.nativeName[data].common).reverse()[0]}</li>
                                    <li><span>population:</span> {population.toLocaleString("en-US")}</li>
                                    <li><span>region:</span> {region}</li>
                                    <li><span>sub region:</span> {subregion}</li>
                                    <li><span>capital:</span> {capital.map(cap => cap).join(',')}</li>
                                </ul>

                                <ul className='cleaned-about-list'>
                                    <li><span>top level domain:</span> {tld[0]}</li>
                                    <li><span>currencies:</span> {Object.keys(currencies).map(curr => currencies[curr].name).join(' , ')}</li>
                                    <li><span>languages:</span> {Object.keys(languages).map(lang => languages[lang]).reverse().join(' , ')}</li>
                                </ul>
                            </div>
                            {borders && 
                            <div className='borders'>
                                <h4 className='subtitle'>border countries:</h4>
                                <div className='borders-container'>
                                    {borderCountries}
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            }
        </main>
    )
}