import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import CharFoundStatus from './components/CharFoundStatus';
import Footer from './components/Footer';
import { characterData } from './data';

// TODO 

// mark on the image where a found character is - just display the name from the dropdown selection box at the char's coordinates

function App() {

  // STATE // 
  const [ data, setData ] = useState(characterData);
  // want user data to have the game start key and the time when finished value
  // also this is where we will store the milliseconds on the timer when the game is completed
  // store the user's name
  // gameOverlayStatus -- 0 [game start screen] -- 1 [game in progress] -- 2 [game completed]
  const [ userData, setUserData ] = useState(
      {
        gameOverlayStatus: 0,
        milliseconds: 0,
        userTime: {
          ms: 0,
          s: 0,
          m: 0
        }
      }
    );

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
    // if so, then 
          //stop the timer -- DONE
          //trigger the gameWon overlay -- DONE
          //grab the milliseconds from the timer and store in the userData object -- DONE
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
    newUserData.gameOverlayStatus = 2;
    newUserData.userTime = {m: time.m, s: time.s, ms: time.ms};
    newUserData.milliseconds = totalMs;
    setUserData(newUserData);
    resetTimer();
   }
  }

  // triggering this function will reset the page back to the GameStartOverlay and put all of the state back to the default settings
  function gameRetry() {
    setData(characterData);
    setUserData({
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

  function getTotalMs(timeObj) {
    let totalMs = 0;
    totalMs += timeObj.ms * 10;
    totalMs += timeObj.s * 1000;
    totalMs += timeObj.m * 60000;

    return totalMs;
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
        data={data}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
