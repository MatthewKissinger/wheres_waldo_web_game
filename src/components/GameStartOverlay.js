import "../styles/GameStartOverlay.css"
import Boba from "../assets/images/Boba-Fett-Portrait.jpg"
import Chewbacca from "../assets/images/Chewbacca-Portrait.jpg"
import Greedo from "../assets/images/Greedo-Portrait.jpg"

// need to pass in a gameStart prop -- if gameStart === false -> the overlay will display

// need to pass in a runTimer function as a prop to trigger the Timer.js in the header to begin counting up

export default function GameStartOverlay(props) {
    return (props.trigger) ? (
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


                {
                // add run timer function on button
                }
                <button className="start-overlay-button">Start Game</button>
            </div>    
        </div>) : "";
    
}
