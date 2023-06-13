import { useEffect } from 'react';
import '../styles/SelectionAlert.css';

export default function SelectionAlert(props) {
    const { alertMsg } = props;

    // function that displays the alertMsg value in the div only for a few seconds after the alertMsg value changes in a useEffect function
    // use a timeOut function??

    return (
        <div className='alert-container'>
            <p className='alert-p'>{alertMsg}</p>
        </div>
    )
}