import "../styles/Leaderboard.css"

export default function Leaderboard(props) {
    const { leaderboard } = props;

    const topTen = leaderboard.map((user) => {
        let id = user.id;
        let index = leaderboard.findIndex((user => user.id === id));
        return (
            <div className="leaderboard-user-info" key={index}>
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

    return (
        <div className="leaderboard-cont">
            <p className="leaderboard-title">High Scores</p>
            {topTen}
        </div>
    )
}