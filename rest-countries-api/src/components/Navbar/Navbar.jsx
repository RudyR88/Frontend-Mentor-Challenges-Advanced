import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <header>
            <nav className='navbar container flex-between' aria-label='home navigation and theme toggle' role='navigation'>
                <h1><Link to='/'>Where in the world?</Link></h1>
                <button className='btn btn--transparent btn-txt'><i className='fa-regular fa-moon icon'></i>  dark mode</button>
            </nav>
        </header>
    )
}
