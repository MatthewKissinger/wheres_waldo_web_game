import React from 'react';
import hoth_battle from "../assets/images/wheres_wookie_ryan_hill.jpeg"
import "../styles/Main.css"

export default function Main() {
    return (
        <div>
            Main content here
            <img class="game-image" src={hoth_battle} alt='hoth battle scene'></img>
        </div>
    )
}