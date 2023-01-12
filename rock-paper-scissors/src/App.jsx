import { useState } from 'react';
import './scss/style.css';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Playfield from './components/Playfield/Playfield';
import RulesBtn from './components/RulesBtn/RulesBtn';

function App() {
  const [gameManager, setGameManager] = useState({
    score: 0,
  })
  return (
    <>
    <main className='app container'>
      <ScoreBoard score={gameManager.score} />
      <Playfield />
    </main>
    <RulesBtn />
    </>
  )
}

export default App
