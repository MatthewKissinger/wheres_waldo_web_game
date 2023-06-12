import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import CharFoundStatus from './components/CharFoundStatus';
import Footer from './components/Footer';
import { characterData } from './data';

// TODO 

// create a component below the header and above the image that displays the character's portraits that the user is searching for.  Initially give the portraits an orange background, when the char's found value is true, change the background color to green

// after a selection is made from the dropdown menu, give positive or negative feedback based on the selection and also make the visibility for the targetingBox and dropdown menu 'hidden' regardless of the feedback given

// mark on the image where a found character is - just display the name from the dropdown selection box at the char's coordinates

function App() {

  // STATE // 
  const [ data, setData ] = useState(characterData);

  const [ userCoords, setUserCoords ] = useState({x: 0, y: 0});

  const [ targetVisibility, setTargetVisibility ] = useState('hidden');

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
        console.log('correct!');
        setTargetVisibility('hidden');
      } else {
        console.log('incorrect');
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
        data={data}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
