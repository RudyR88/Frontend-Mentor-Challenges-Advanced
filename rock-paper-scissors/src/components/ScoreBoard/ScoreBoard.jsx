import React from 'react';
import './ScoreBoard.css';

export default function ScoreBoard({score}) {
    return (
        <div className='scoreboard'>
            <img src='../assets/logo-bonus.svg' alt='rock paper scissors lizard spock logo'/>
            <div className='score-container'>
                <span className='overline'>score</span>
                <h1>{score}</h1>
            </div>
        </div>
    )
}
