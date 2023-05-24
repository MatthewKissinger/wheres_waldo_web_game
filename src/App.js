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

    let xOffSet = e.target.offsetLeft;
    let yOffSet = e.target.offsetTop;

    console.log(`X: ${e.pageX - xOffSet}`);
    console.log(`Y: ${e.pageY - yOffSet}`);
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
