import React from 'react';
import './RulesBtn.css'

export default function RulesBtn({toggle}) {
    return (
        <button className='btn btn--transparent rules-btn' onClick={toggle}>rules</button>
    )
}