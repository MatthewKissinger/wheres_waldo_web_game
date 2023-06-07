import { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { characterData } from './data';

// TODO 

function App() {

  // STATE // 
  const [ data, setData ] = useState(characterData);

  const [ userCoords, setUserCoords ] = useState({x: 0, y: 0});

  // methods

  function dropdownSelection(e) {
    console.log(e.target.id);

    console.log(userCoords);

    if (e.target.tagName === 'LI') {
      
    }
  }

  function charInTarget(x, y) {

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
