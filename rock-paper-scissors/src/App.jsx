import { useState } from 'react';
import './scss/style.css';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Playfield from './components/Playfield/Playfield';
import RulesBtn from './components/RulesBtn/RulesBtn';
import Rules from './components/Rules/Rules';

function App() {
  const [gameManager, setGameManager] = useState({
    score: 0,
    rulesToggled: false
  });

  const toggleRules = () => {
    setGameManager(prev => {
      const {rulesToggled} = prev;
      return {...prev, rulesToggled: !rulesToggled}
    })
  }

  return (
    <>
    <main className='app container'>
      <ScoreBoard score={gameManager.score} />
      <Playfield />
    </main>
    <RulesBtn toggle={toggleRules}/>
    {gameManager.rulesToggled && <Rules toggle={toggleRules}/>}
    </>
  )
}

export default App
