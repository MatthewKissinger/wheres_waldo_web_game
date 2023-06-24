import React from 'react';
import Timer from './Timer';
import '../styles/Header.css'

export default function Header(props) {
    const { time } = props;

    return (
        <header className='header'>
            <ul className='header__left'>Where's Waldo</ul>
            <ul className='header__right'>
                <Timer
                    time={time}
                ></Timer>
            </ul>
        </header>
    )
}