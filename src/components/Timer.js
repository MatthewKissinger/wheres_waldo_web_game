import { useRef, useState } from 'react';
import '../styles/Timer.css'

export default function Timer(props) {

    // pass into Timer the user prop that will have a gamestart value of true, if the gamestart value is true the timer will begin

    const [time, setTime] = useState({ms:0, s:0, m:0});
    
    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m;

    const runTimer = () => {
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM});
    }

    function timerStart() {
        runTimer();
        setInterval(runTimer, 10);
    }

    return (
        <div className="timer">
            <p>Timer:</p>
            <span>{(time.m >= 10) ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
            <span>{(time.s >= 10) ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
            <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>
            <button className='timer-start'
                    onClick={timerStart}
            >start</button>
        </div>
    )
}