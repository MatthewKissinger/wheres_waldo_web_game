import { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// TODO
// 1) research best method for keeping components the same size regardless of window size and zoom percentage
// changing sizes for fonts and targetingDiv to vh percentages

// 2) research a way to get consistent coordinates on the screen with the user changing window size and zoom percentage

function App() {

  // STATE // 

  // methods
  function grabCoordinateRatio(e) {

    // get the target's dimensions
    // let offset = e.target.getBoundingClientRect();

    // // get xCoordinate of mouseclick inside of the image
    // let xOffSet =  offset.left;
    // let xCoordinate = e.pageX - xOffSet;
    // let xRatio = xCoordinate / imageWidth;
    // console.log(`X Ratio: ${xRatio.toFixed(3)}`);
    
    // // get xCoordinate of mouseclick inside of the image
    // let yOffSet = offset.top;
    // let yCoordinate = e.pageY - yOffSet;
    // let yRatio = yCoordinate / imageHeight;
    // console.log(`Y Ratio: ${yRatio.toFixed(3)}`);
  }

  // commented out for now
  function showTargetingBox(e) {
    let offset = e.target.getBoundingClientRect();

    let xCoordinate = (e.pageX - offset.left) - 40;

    let yCoordinate = ((e.pageY - offset.top) - 40) - window.scrollY;

    console.log(xCoordinate);
    console.log(yCoordinate);  

  }

  function selectDropdownOption(e) {
    console.log(e.target);
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
