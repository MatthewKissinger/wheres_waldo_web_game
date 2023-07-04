import { useState} from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import CharFoundStatus from './components/CharFoundStatus';
import Footer from './components/Footer';
import { characterData } from './data';
import { leaderboardData } from './leaderboard-data';
import uniqid from 'uniqid';

// TODO 
// create a leaderboard object that displays the top 10 high scores 
// use the totalMs value for comparisons
// 1) give the userData state a unique id value
// 1) set the leaderboard state with the new leaderboard that is sorted if the user qualifies for the top ten
// 2) create a database in firebase to hold the leaderboard data

function App() {

  // STATE // 
  const [ data, setData ] = useState(characterData);
 
  // gameOverlayStatus -- 0 [game start screen] -- 1 [game in progress] -- 2 [game completed]
  const [ userData, setUserData ] = useState(
      {
        id: uniqid(),
        name: '',
        gameOverlayStatus: 0,
        milliseconds: 0,
        userTime: {
          ms: 0,
          s: 0,
          m: 0
        }
      }
    );

  const [ leaderboard, setLeaderboard] = useState(leaderboardData);

  const [ userCoords, setUserCoords ] = useState({x: 0, y: 0});
  const [ targetVisibility, setTargetVisibility ] = useState('hidden');
  const [ alertMsg, setAlertMsg ] = useState('none');

  // timer state
  const [time, setTime] = useState({ms: 0, s: 0, m: 0});
  const [interv, setInterv] = useState();

  // methods

  // timer methods

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
      // shallow duplicate of userData for updating ther gameStart trigger
      const newUserData = {...userData};
      newUserData.gameOverlayStatus = 1;
      setUserData(newUserData);

      return setTime({ms:updatedMs, s:updatedS, m:updatedM});
  }

  const stopTimer = () => {
      clearInterval(interv);
  }

  const resetTimer = () => {
      clearInterval(interv);
      setTime({ms: 0, s: 0, m: 0})
  }

  function timerStart() {
      runTimer();
      setInterv(setInterval(runTimer, 10));
  }

  // gameplay methods

  function dropdownSelection(e) {

    if (e.target.tagName === 'LI') {
      let id = e.target.id;
      let obj = data.find(char => char.id === id);

      if (userCoords.x > obj.x - 30 && userCoords.x < obj.x + 30 && userCoords.y > obj.y - 30 && userCoords.y < obj.y + 30) {
        const newData = data.map((char) => {
          if (char.id === id) {
            return { ...char, found: true };
          }
          return char;
        });

        setData(newData);
        setAlertMsg('correct');
        gameWon(newData);
        setTargetVisibility('hidden');
      } else {
        setAlertMsg('incorrect');
        setTargetVisibility('hidden');
      }
    }
  }

  function gameWon(data) {
    // check and see if each character's found property is true
    let result = data.every((char) => {
      if (char.found === true) {
        return true;
      } 
      return false;
    }) 

   if (result === true) {
    stopTimer();
    
    const totalMs = getTotalMs(time);
    const newUserData = {...userData};
    //trigger the gameWon overlay
    newUserData.gameOverlayStatus = 2;
    newUserData.userTime = {m: time.m, s: time.s, ms: time.ms};
    newUserData.milliseconds = totalMs;
    setUserData(newUserData);
    testForHighScore(newUserData);
    resetTimer();
   }
  }

  // triggering this function will reset the page back to the GameStartOverlay and put all of the state back to the default settings
  function gameRetry() {
    setData(characterData);
    setUserData({
      name: '',
      gameOverlayStatus: 0,
      milliseconds: 0,
      userTime: {
        ms: 0,
        s: 0,
        m: 0
      }
    });
    setUserCoords({x: 0, y: 0});
    setTargetVisibility('hidden');
    setAlertMsg('none');
  }

  // used to easily compare user's timescores for the high score leaderboard
  function getTotalMs(timeObj) {
    let totalMs = 0;
    totalMs += timeObj.ms * 10;
    totalMs += timeObj.s * 1000;
    totalMs += timeObj.m * 60000;

    return totalMs;
  }

  function testForHighScore(userData) {
    if (userData.milliseconds < leaderboard[9].milliseconds) {
      const newLeaderboard = [...leaderboard];
      newLeaderboard[9] = userData;
      console.log(newLeaderboard);
      // sort the leaderboardData array by millisecond value, lowest first
      setLeaderboard(newLeaderboard);
      
    }
  }

  return (
    <div className="App">
      <Header
        time={time}
      ></Header>
      <CharFoundStatus
        data={data}
      ></CharFoundStatus>
      <Main
        dropdownSelection={dropdownSelection}
        setUserCoords={setUserCoords}
        targetVisibility={targetVisibility}
        setTargetVisibility={setTargetVisibility}
        alertMsg={alertMsg}
        setAlertMsg={setAlertMsg}
        timerStart={timerStart}
        gameRetry={gameRetry}
        userData={userData}
        setUserData={setUserData}
        data={data}
        leaderboard={leaderboard}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
