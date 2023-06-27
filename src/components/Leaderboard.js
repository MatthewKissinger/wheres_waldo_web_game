import "../styles/Leaderboard.css"
import { leaderboardData } from "../leaderboard-data"

// import and map over the leaderboard data to output the top ten scores
// console.log(leaderboardData);
// add in the time formula for the stopwatch

const topTen = leaderboardData.map((user) => {
    let id = user.id;
    let index = leaderboardData.findIndex((user => user.id === id));
    return (
        <div className="leaderboard-user-info">
            <p className="leaderboard-rank">{index + 1}</p>
            <p>{user.name}</p>
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