import React from 'react';
import './Rules.css';

function Rules({toggle}) {
    return (
        <div className='rules-bg'>
            <div className='rules container'>
                <h2>rules</h2>
                <img className='rules-img' src='../assets/image-rules-bonus.svg' alt={`
                scissors beats paper and lizard
                paper beats rock and spock
                rock beats scissors and lizzard
                lizard beats paper and spock
                spock beats scissors and rock
                `}/>
                <button className='btn btn--transparent rules__close' onClick={toggle}><i className='fa-solid fa-x'></i></button>
            </div>
        </div>
    )
}

export default Rules
