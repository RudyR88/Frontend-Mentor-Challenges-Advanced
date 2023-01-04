import React, {useContext} from 'react';
import { ThemeContext } from '../../context/themeContext';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <header className={`${theme}`}>
            <nav className='navbar container flex-between' aria-label='home navigation and theme toggle' role='navigation'>
                <h1 className='extra-bold'><Link to='/'>Where in the world?</Link></h1>
                <button className='btn btn--transparent btn-txt' onClick={toggleTheme}>
                    <i className={`fa-${theme === 'dark' ? 'solid' : 'regular'} fa-moon darkmode-icon`}></i>dark mode
                </button>
            </nav>
        </header>
    )
}
