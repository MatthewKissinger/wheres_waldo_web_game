import { useState } from 'react';
import hoth_battle from "../assets/images/wheres_wookie_ryan_hill.jpeg"
import "../styles/Main.css"
import Boba from "../assets/images/Boba-Fett-Portrait.jpg"
import Chewbacca from "../assets/images/Chewbacca-Portrait.jpg"
import Greedo from "../assets/images/Greedo-Portrait.jpg"

export default function Main(props) {
    const { dropdownSelection, data } = props;

    // State
    const [ targetLocation, setTargetLocation ] = useState({x: 0, y:0, visibility: 'hidden'});

    const [ dropdownLocation, setDropdownLocation ] = useState({x: 0, y:0, visibility: 'hidden'});

    function showTargetingBox(e) {
        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;

        // y needs to subtract 10% of the height from the value
        // height is 791
        // x needs to subtract 7% of the width from the value
        // width of image is 1200
        setTargetLocation({x: (x - 42), y: (y - 40), visibility: 'visible'});
        setDropdownLocation({x: (x + 70), y: (y - 40), visibility: 'visible'})
    }

    return (
        <div className='main'>
            <div className='image__container'>
                <img className="image"
                    onClick={showTargetingBox}
                    src={hoth_battle} 
                    alt='hoth battle scene'
                ></img>
                <div className='targetingDiv'
                    style={{'left': targetLocation.x, 'top': targetLocation.y, 'visibility': targetLocation.visibility}}
                ></div>
                <div className='dropdown'
                    style={{'left': dropdownLocation.x, 'top': dropdownLocation.y, 'visibility': dropdownLocation.visibility}}
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