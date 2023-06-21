import "../styles/GameWonOverlay.css";


export default function GameWonOverlay(props) {
    const { userData, gameRetry } = props;

    return (userData.gameOverlayStatus === 2) ? 
        (<div className="won-overlay-bg">
            <div className="won-overlay-cont">
                <p className="won-overlay-announcement">Congratulations!</p>
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
        </div>) : "";
}