import React, {useContext} from 'react';
import { ThemeContext } from '../../context/themeContext';
import './SearchBar.css';

export default function SearchBar() {
    const {theme} = useContext(ThemeContext);
    const magColor = {
        color: theme === 'light' ? 'hsl(0, 0%, 77%)' : 'inherit',
    }
    return (
        <div className={`searchbar ${theme}`}>
            <i className='fa-solid fa-magnifying-glass' style={magColor}></i>
            <input type='text' placeholder='Search for country...'/>
        </div>
    )
}
