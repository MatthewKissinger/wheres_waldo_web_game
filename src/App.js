import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// store all of the state and functions inside of App.js

// TODO

// 1) find the coordinates of 3 characters in the image
//  -- create a grab coordinate function for the image
//  -- console.log the coordinate clicked 
// 2) save these coordinates in a firestore database
// 3) when the user clicks on the image a selection circle should appear -- that circle will grab an area of pixels from the image 

function App() {

  // methods
  function grabCoordinate(e) {
    // find relative xCoordinate and yCoordinates based off of 
    // xCoordinate / imageWidth & yCoordinate / imageHeight
    // store the ratios in a database

    // get imageWidth
    // console.log(e.target.clientWidth);
    
    // get imageHeight
    // console.log(e.target.clientHeight);

    // get xCoordinate of mouseclick inside of the image
    let xCoordinate =  e.target.offsetLeft;
    console.log(xCoordinate);

    // get xCoordinate of mouseclick inside of the image
    let yCoordinate = e.target.offsetTop;
    console.log(yCoordinate);

  }


  return (
    <div className="App">
      <Header></Header>
      <Main
        grabCoordinate={grabCoordinate}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
