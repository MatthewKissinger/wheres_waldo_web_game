import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// store all of the state and functions inside of App.js

// TODO

// 1) find the coordinates of 3 characters in the image --DONE
//  -- create a grab coordinate function for the image --DONE
//  -- console.log the coordinate clicked 
// 2) save these coordinates in a firestore database
// 3) when the user clicks on the image a selection circle should appear -- that circle will grab an area of pixels from the image 

function App() {

  // methods
  function grabCoordinateRatio(e) {
    // ratios grabbed for characters to be stored for reference from user clicks

    // get imageWidth
    let imageWidth = e.target.clientWidth;

    // get xCoordinate of mouseclick inside of the image
    let xOffSet =  e.target.offsetLeft;
    let xCoordinate = e.pageX - xOffSet;
    let xRatio = xCoordinate / imageWidth;
    console.log(`X Ratio: ${xRatio.toFixed(3)}`);

    // get imageHeight
    let imageHeight = e.target.clientHeight;

    // get xCoordinate of mouseclick inside of the image
    let yOffSet = e.target.offsetTop;
    let yCoordinate = e.pageY - yOffSet;
    let yRatio = yCoordinate / imageHeight;
    console.log(`Y Ratio: ${yRatio.toFixed(3)}`);
  }

  function showTargetingBox(e) {
    console.log(e.target);
    let xCoordinate = e.pageX - e.target.offsetLeft;
    let yCoordinate = e.pageY - e.target.offsetTop;

    let targetingDiv = document.createElement('div');
    targetingDiv.classList.add('targetingDiv');
  }

  return (
    <div className="App">
      <Header></Header>
      <Main
        grabCoordinateRatio={grabCoordinateRatio}
        showTargetingBox={showTargetingBox}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
