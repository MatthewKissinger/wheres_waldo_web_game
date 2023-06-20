import "../styles/GameStartOverlay.css"
import Boba from "../assets/images/Boba-Fett-Portrait.jpg"
import Chewbacca from "../assets/images/Chewbacca-Portrait.jpg"
import Greedo from "../assets/images/Greedo-Portrait.jpg"

export default function GameStartOverlay(props) {
    const { timerStart, userData } = props;

    return (!userData.gameStart) ? (
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
                <button className="start-overlay-button"
                        onClick={timerStart}
                >Start Game</button>
            </div>    
        </div>) : "";
    
}
