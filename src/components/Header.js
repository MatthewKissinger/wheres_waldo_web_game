import React from 'react';
import Timer from './Timer';
import '../styles/Header.css'

export default function Header() {
    return (
        <header className='header'>
            <ul className='header__left'>Where's Waldo</ul>
            <Timer></Timer>
            <ul className='header__right'>
                <li>Info</li>
            </ul>
        </header>
    )
}