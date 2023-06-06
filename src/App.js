import { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// TODO
// make the image an absolute width of 1400px
// then take the ratio of the coordinate clicked divided by the width 

function App() {

  // STATE // 


  // methods
  function grabCoordinateRatio(e) {
    // console.log(e.nativeEvent);

    let img = e.target.getBoundingClientRect();
    let imgWidth = img.width;
    let imgHeight = img.height;

    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    console.log('img width: ' + imgWidth);
    console.log('img height: ' + imgHeight);

    console.log('x coordinate clicked: ' + x);
    console.log('y coordinate clicked: ' + y);

  }

  // commented out for now
  function showTargetingBox(e) {
    // console.log(e.target);
  }

  function selectDropdownOption(e) {
    // console.log(e.target);
  }

  return (
    <div className="App">
      <Header></Header>
      <Main
        grabCoordinateRatio={grabCoordinateRatio}
        showTargetingBox={showTargetingBox}
        selectDropdownOption={selectDropdownOption}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
