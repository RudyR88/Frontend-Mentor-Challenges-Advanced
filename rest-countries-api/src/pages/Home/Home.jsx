import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import './Home.css';

export default function Home({theme}) {
    return (
        <main className='container home'>
            <div className='controls controls-txt'>
                <SearchBar theme={theme}/>
                <Filter theme={theme}/>
            </div>
        </main>
    )
}
