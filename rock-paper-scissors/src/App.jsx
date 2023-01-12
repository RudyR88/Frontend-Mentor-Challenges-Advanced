import { useState } from 'react';
import './scss/style.css';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

function App() {
  const [gameManager, setGameManager] = useState({
    score: 12,
  })
  return (
    <main className='app container'>
      <ScoreBoard score={gameManager.score} />
    </main>
  )
}

export default App
