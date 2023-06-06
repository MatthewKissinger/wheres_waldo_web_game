import React from 'react';
import hoth_battle from "../assets/images/wheres_wookie_ryan_hill.jpeg"
import "../styles/Main.css"
import Boba from "../assets/images/Boba-Fett-Portrait.jpg"
import Chewbacca from "../assets/images/Chewbacca-Portrait.jpg"
import Greedo from "../assets/images/Greedo-Portrait.jpg"

export default function Main(props) {
    const { grabCoordinateRatio, showTargetingBox, selectDropdownOption } = props;

    return (
        <div className='main'>
            <div className='image__container'
            >
                <img className="image"
                    onClick={showTargetingBox}
                    src={hoth_battle} 
                    alt='hoth battle scene'
                    onMouseDown={grabCoordinateRatio}
                ></img>
                <div className='targetingDiv'
                ></div>
                <div className='dropdown'
                    onClick={selectDropdownOption}
                >
                    <li className='dropdown_char1' id='char1'>
                        <img src={Chewbacca} alt='portrait of Chewbacca'></img>
                        <p>Chewbacca</p>
                    </li>
                    <li className='dropdown_char2' id='char2'>
                        <img src={Boba} alt='portrait of Boba Fett'></img>
                        <p>Boba Fett</p>
                    </li>
                    <li className='dropdown_char3' id='char3'>
                        <img src={Greedo} alt='portrait of Greedo'></img>
                        <p>Greedo</p>
                    </li>
                </div>
            </div>  
        </div>
    )
}