import { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { characterData } from './data';

// TODO 
// after a selection is made from the dropdown menu, give positive or negative feedback based on the selection and also make the visibility for the targetingBox and dropdown menu 'hidden' regardless of the feedback given

function App() {

  // STATE // 
  const [ data, setData ] = useState(characterData);

  const [ userCoords, setUserCoords ] = useState({x: 0, y: 0});

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
      } else {
        console.log('incorrect');
      }
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <Main
        // grabCoordinate={grabCoordinate}
        dropdownSelection={dropdownSelection}
        setUserCoords={setUserCoords}
        data={data}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
