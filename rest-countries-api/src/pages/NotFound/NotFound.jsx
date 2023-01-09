import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound({theme}) {
    const [countDown, setCountDown] = useState(5);
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            setCountDown(prev => prev - 1)
            if(countDown === 0){
                (navigate('/'))
            }
        }, 1000)
    },[countDown])
    return (
        <main className={`not-found ${theme}-clr container`}>
            <h2>oops! page not found</h2>
            <p>Redirecting in {countDown} secs.</p>
        </main>
    )
}
