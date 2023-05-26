import React from 'react';
import hoth_battle from "../assets/images/wheres_wookie_ryan_hill.jpeg"
import "../styles/Main.css"

export default function Main(props) {
    const { grabCoordinateRatio, showTargetingBox } = props;

    return (
        <div className='main'>
            <div className='image__container'>
                <img className="image" 
                    src={hoth_battle} 
                    alt='hoth battle scene'
                    // onMouseDown={grabCoordinateRatio}
                    onClick={showTargetingBox}
                ></img>
            </div>  
        </div>
    )
}