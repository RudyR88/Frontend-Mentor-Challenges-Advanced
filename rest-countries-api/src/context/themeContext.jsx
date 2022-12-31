import {useState, createContext} from 'react';
const ThemeContext = createContext();

function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme(prevtheme => prevtheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContextProvider, ThemeContext}