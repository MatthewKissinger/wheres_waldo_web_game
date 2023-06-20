import '../styles/Timer.css'

export default function Timer(props) {
    const { time } = props;

    // pass into Timer the user prop that will have a gamestart value of true, if the gamestart value is true the timer will begin

    // have all of the timer states in the App.js component and pass down the props. also have a function that gets the total number of milliseconds for the user's time, easier to compare times this way

    return (
        <div className="timer">
            <p>Timer:</p>
            <span>{(time.m >= 10) ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
            <span>{(time.s >= 10) ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
            <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>
        </div>
    )
}