import "../styles/GameWonOverlay.css";
import Leaderboard from './Leaderboard';


export default function GameWonOverlay(props) {
    const { userData, gameRetry } = props;

    return (
    
        <div className="won-overlay-bg">
            <Leaderboard>
                
            </Leaderboard>
            <div className="won-overlay-cont">
                <p className="won-overlay-announcement">Congratulations {userData.name}
                !</p>
                <div className="won-overlay-time-cont">  
                    <p>Your time: </p> 
                    <p>
                        {(userData.userTime.m >= 10) ? userData.userTime.m : "0" + userData.userTime.m}:
                        {(userData.userTime.s >= 10) ? userData.userTime.s : "0" + userData.userTime.s}:
                        {(userData.userTime.ms >= 10) ? userData.userTime.ms : "0" + userData.userTime.ms}
                    </p>  
                </div>           
                <button className="won-overlay-button"
                        onClick={gameRetry}>   
                    Retry
                </button>
            </div>  
        </div>
        )
}