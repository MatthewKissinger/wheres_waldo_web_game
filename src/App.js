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
  const [ userData, setUserData ] = useState({});
  const [ userCoords, setUserCoords ] = useState({x: 0, y: 0});
  const [ targetVisibility, setTargetVisibility ] = useState('hidden');
  const [ alertMsg, setAlertMsg ] = useState('none');

  // methods

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
        setTargetVisibility('hidden');
      } else {
        setAlertMsg('incorrect');
        setTargetVisibility('hidden');
      }
    }
  }

  return (
    <div className="App">
      <Header></Header>
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
        data={data}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
