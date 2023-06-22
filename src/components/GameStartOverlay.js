import { useState } from 'react'
import "../styles/GameStartOverlay.css"
import Boba from "../assets/images/Boba-Fett-Portrait.jpg"
import Chewbacca from "../assets/images/Chewbacca-Portrait.jpg"
import Greedo from "../assets/images/Greedo-Portrait.jpg"

export default function GameStartOverlay(props) {
    const { timerStart, userData, setUserData } = props;

    const [userName, setUserName] = useState('');

    const handleNameChange = (e) => {
        setUserName(e.target.value);
        console.log(userName);
    }

      // passed to the GameStartOverlay.js to get the name from the user
    function storeUserName(userName) {
        const newUserData = {...userData};
        newUserData.name = userName;
        console.log(newUserData);
        setUserData(newUserData);
    }
    
    return (
        <div className="start-overlay-bg">
            <div className="start-overlay-cont">
                <div className="start-overlay-chars">
                    <div className="start-overlay-char1">
                        <p>Chewbacca</p>
                        <img src={Chewbacca} alt="portrait of chewbacca"></img>
                    </div>
                    <div className="start-overlay-char2">
                        <p>Boba Fett</p>
                        <img src={Boba} alt="portrait of Boba Fett"></img>
                    </div>
                    <div className="start-overlay-char3">
                        <p>Greedo</p>
                        <img src={Greedo} alt="portrait of Greedo"></img>
                    </div>
                </div>
                <p className="start-overlay-instructions"> Find Chewbacca, Boba Fett, and Greedo. The fastest time gets the high score.</p>
                <label>Enter a Name: 
                    <input name="userName"
                            onChange={handleNameChange}
                            value={userName}
                    ></input>
                </label>
                <button 
                    className="start-overlay-button"
                    onClick={() => {storeUserName(userName); timerStart();}}>
                    Start Game
                </button>
            </div>    
        </div>
        ) 
}
