import React from 'react';
import hoth_battle from "../assets/images/wheres_wookie_ryan_hill.jpeg"
import "../styles/Main.css"

export default function Main(props) {
    const { grabCoordinateRatio, showTargetingBox, targetLocation } = props;

    return (
        <div className='main'>
            <div className='image__container'
                onClick={showTargetingBox}
            >
                <img className="image" 
                    src={hoth_battle} 
                    alt='hoth battle scene'
                    onMouseDown={grabCoordinateRatio}
                ></img>
                <div className='targetingDiv'
                    style={{'top': `${targetLocation[0]}`, 
                            'left': `${targetLocation[1]}`,
                            'visibility': `${targetLocation[2]}`}}
                ></div>
                <div className='dropdown'>
                    <li className='dropdown_char1'>Chewbacca</li>
                    <li className='dropdown_char2'>Boba Fett</li>
                    <li className='dropdown_char3'>Greedo</li>
                </div>
            </div>  
        </div>
    )
}