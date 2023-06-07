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

  // methods
  // used to get the coordinates for the character that the user is looking for
  // function grabCoordinate(e) {
  //   let x = e.nativeEvent.offsetX;
  //   let y = e.nativeEvent.offsetY;

  //   let width = e.target.width;
  //   let height = e.target.height;
  // }

  function dropdownSelection(e) {
    console.log(e.target.id);

    if (e.target.tagName === 'LI') {
      
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <Main
        // grabCoordinate={grabCoordinate}
        dropdownSelection={dropdownSelection}
        data={data}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
