import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CountryInfo.css';

export default function CountryInfo({theme}) {
    let {abbrev} = useParams();
    const [info, setInfo] = useState('');
    const apiUrl = `https://restcountries.com/v3.1/alpha/${abbrev}`;
    const navigate = useNavigate();

    const getCountry = async () => {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setInfo(data[0]);
    }

    useEffect(() => {
        getCountry()
        .catch(console.error);;
    }, [])

    if(info){
        var {flags, name} = info;
    }

    return (
        <main className='container country'>
            <button className={`btn btn--back ${theme}`} onClick={()=>navigate(-1)}><i className='fa-solid fa-arrow-left-long back-arrow'></i>back</button>
            {
                info &&
                <div className='country__info'>
                    <img className='country__info__flag' src={flags.png} alt=''/>
                    <div className='country__info__about'>
                        <h3>{name.official !== undefined ? name.official : name}</h3>
                        <div className='country__info__about__specs'>
                            <ul>
                                <li><span>native name:</span></li>
                                <li><span>population:</span></li>
                                <li><span>region:</span></li>
                                <li><span>sub region:</span></li>
                                <li><span>capital:</span></li>
                            </ul>

                            <ul>
                                <li><span>top level domain:</span></li>
                                <li><span>currencies:</span></li>
                                <li><span>languages:</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </main>
    )
}