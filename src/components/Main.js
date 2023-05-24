import React from 'react';
import hoth_battle from "../assets/images/wheres_wookie_ryan_hill.jpeg"
import "../styles/Main.css"

export default function Main(props) {
    const { grabCoordinate } = props;

    return (
        <div className='main'>
            <div className='image__container'>
                <img className="image" 
                    src={hoth_battle} 
                    alt='hoth battle scene'
                    onMouseDown={grabCoordinate}
                ></img>
            </div>  
        </div>
    )
}