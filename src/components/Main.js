import { useState } from 'react';
import hoth_battle from "../assets/images/wheres_wookie_ryan_hill.jpeg"
import "../styles/Main.css"
import Boba from "../assets/images/Boba-Fett-Portrait.jpg"
import Chewbacca from "../assets/images/Chewbacca-Portrait.jpg"
import Greedo from "../assets/images/Greedo-Portrait.jpg"
import SelectionAlert from './SelectionAlert';

export default function Main(props) {
    const { dropdownSelection, setUserCoords, targetVisibility, setTargetVisibility, alertMsg, data } = props;

    // State
    const [ targetLocation, setTargetLocation ] = useState({x: 0, y: 0});

    const [ dropdownLocation, setDropdownLocation ] = useState({x: 0, y: 0});

    function showTargetingBox(e) {
        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;

        setUserCoords({x: x, y: y});
        setTargetVisibility('visible');

        // y needs to subtract 10% of the height from the value
        // height is 791
        // x needs to subtract 7% of the width from the value
        // width of image is 1200
        setTargetLocation({x: (x - 42), y: (y - 40)});
        setDropdownLocation({x: (x + 70), y: (y - 40)})
    }

    return (
        <div className='main'>
            <SelectionAlert
                alertMsg={alertMsg}
            ></SelectionAlert>
            <div className='image__container'>
                <img className="image"
                    style={{'pointerEvents': `${targetVisibility === 'visible' ? 'none' : 'auto'}`}}
                    
                    onClick={showTargetingBox}
                    src={hoth_battle} 
                    alt='hoth battle scene'
                ></img>
                <div className='targetingDiv'
                    style={{'left': targetLocation.x, 'top': targetLocation.y, 'visibility': targetVisibility}}
                ></div>
                <div className='dropdown'
                    style={{'left': dropdownLocation.x, 'top': dropdownLocation.y, 'visibility': targetVisibility}}
                    onClick={dropdownSelection}
                >
                    {!data[0].found && 
                        <li className='dropdown_char1' id='char1'
                        >
                            <img src={Chewbacca} alt='portrait of Chewbacca'></img>
                            <p>Chewbacca</p>
                        </li>
                    }
                    {!data[1].found &&
                        <li className='dropdown_char2' id='char2'>
                            <img src={Boba} alt='portrait of Boba Fett'></img>
                            <p>Boba Fett</p>
                        </li>
                    }
                    {!data[2].found &&
                        <li className='dropdown_char3' id='char3'>
                            <img src={Greedo} alt='portrait of Greedo'></img>
                            <p>Greedo</p>
                        </li>
                    }
                </div>
            </div>  
        </div>
    )
}