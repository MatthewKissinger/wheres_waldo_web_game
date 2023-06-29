import "../styles/Leaderboard.css"
import { leaderboardData } from "../leaderboard-data"

const topTen = leaderboardData.map((user) => {
    let id = user.id;
    let index = leaderboardData.findIndex((user => user.id === id));
    return (
        <div className="leaderboard-user-info">
            <p className="leaderboard-rank">{index + 1}</p>
            <p>{user.name}</p>
            <p>
                {(user.userTime.m >= 10) ? user.userTime.m : "0" + user.userTime.m}:
                {(user.userTime.s >= 10) ? user.userTime.s : "0" + user.userTime.s}:
                {(user.userTime.ms >= 10) ? user.userTime.ms : "0" + user.userTime.ms}
            </p>  
        </div>
        
    )
})

export default function Leaderboard() {
    return (
        <div className="leaderboard-cont">
            <p className="leaderboard-title">High Scores</p>
            {topTen}
        </div>
    )
}