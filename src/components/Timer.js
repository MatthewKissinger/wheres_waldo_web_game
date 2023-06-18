import { useRef, useState } from 'react';
import '../styles/Timer.css'

export default function Timer(props) {

    // pass into Timer the user prop that will have a gamestart value of true, if the gamestart value is true the timer will begin

    const [time, setTime] = useState(null);
    const [now, setNow] = useState(null);
 
    const intervalRef = useRef(null);

    function timerStart() {
        setTime(Date.now());
        setNow(Date.now());

        intervalRef.current = setInterval(() => {
            setTime(Date.now())
        }, 10);
    }

    function timerClear() {
        clearInterval(intervalRef.current);
    }

    let timePassed = (time - now) / 1000;


    return (
        <div className="timer">
            <p>Timer: {timePassed.toFixed(3)}</p>
            <button className='timer-start'
                    onClick={timerStart}
            >start</button>
        </div>
    )
}