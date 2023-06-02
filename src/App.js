import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// store all of the state and functions inside of App.js

// TODO
// 1) create a dropdown menu that displays to the right of the selection circle after the user makes a selection by clicking on the image
//  -- this dropdown is to include portraits of the characters that are clickable as an option-- DONE

// 2) make the image unclickable after a selection on the image has been made.  After the user selects an option from the dropdown menu make the image clickable again until the game is completed

// 3) save the ratios of pixel location for each character in a firestore database using the grabCoordinate function

// store image width and height in state -- update every time the window is resized

function App() {

  // state

  // image styling -- value is for the pointer-events styling property
  const [ imageStyle, setImageStyle ] = useState('auto');

  // the user target circle location
  // first array value = top, second = left, third = visibility
  const [ targetLocation, setTargetLocation] = useState(['50px', '50px', 'hidden']);

  // the selection dropdown box after a user clicks on the image
  const [ dropdownLocation, setDropdownLocation ] = useState(['50px', '50px', 'hidden']);

  // methods
  function grabCoordinateRatio(e) {
    // ratios grabbed for characters to be stored for reference from user clicks

    // get the target's dimensions
    let offset = e.target.getBoundingClientRect();

    // get imageWidth
    let imageWidth = e.target.clientWidth;

    // get xCoordinate of mouseclick inside of the image
    let xOffSet =  offset.left;
    let xCoordinate = e.pageX - xOffSet;
    let xRatio = xCoordinate / imageWidth;
    // console.log(`X Ratio: ${xRatio.toFixed(3)}`);

    // get imageHeight
    let imageHeight = e.target.clientHeight;

    // get xCoordinate of mouseclick inside of the image
    let yOffSet = offset.top;
    let yCoordinate = e.pageY - yOffSet;
    let yRatio = yCoordinate / imageHeight;
    // console.log(`Y Ratio: ${yRatio.toFixed(3)}`);
  }

  function showTargetingBox(e) {
    let offset = e.target.getBoundingClientRect();

    let xCoordinate = (e.pageX - offset.left) - 40;

    let yCoordinate = ((e.pageY - offset.top) - 40) - window.scrollY;

    // update the state of targeting box on click
    setTargetLocation([`${yCoordinate.toString()}px`, `${xCoordinate.toString()}px`, 'visible']);

    let dropDownXCoordinate = xCoordinate + 100;

    // the state of the dropdownLocation on click
    setDropdownLocation([`${yCoordinate.toString()}px`, `${dropDownXCoordinate.toString()}px`, 'visible'])

    // the state of the pointer-events on the image
    setImageStyle('none');
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
        imageStyle={imageStyle}
        targetLocation={targetLocation}
        dropdownLocation={dropdownLocation}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
