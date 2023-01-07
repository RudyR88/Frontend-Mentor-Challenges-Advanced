import {useContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ThemeContext } from './context/themeContext';
import Home from './pages/Home/Home';
import CountryInfo from './pages/CountryInfo/CountryInfo';
import './scss/style.css';

export default function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`app ${theme}-section`}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = '/' element={<Home theme={theme}/>}/>
          <Route path = '/:abbrev' element={<CountryInfo theme={theme}/>}/>
        </Routes>
      </Router>
    </div>
  )
}
