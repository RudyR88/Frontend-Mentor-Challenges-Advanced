import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import './scss/style.css';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = '/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}
