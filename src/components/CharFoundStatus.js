import React from 'react';
import "../styles/CharFoundStatus.css"
import Boba from "../assets/images/Boba-Fett-Portrait.jpg"
import Chewbacca from "../assets/images/Chewbacca-Portrait.jpg"
import Greedo from "../assets/images/Greedo-Portrait.jpg"


export default function CharFoundStatus(props) {
    const { data } = props;

    return (
        <div className='char-status-container'>
            <div className='char-img-container'
                style={{'border': `5px solid ${data[0].found === true ? 'limegreen' : 'red'}`}}
            >
                <img src={Chewbacca} alt='portrait of Chewbacca'></img>
            </div>
            <div className='char-img-container'
                style={{'border': `5px solid ${data[1].found === true ? 'limegreen' : 'red'}`}}
                >
                <img src={Boba} alt='portrait of Boba Fett'></img>
            </div>
            <div className='char-img-container'
                style={{'border': `5px solid ${data[2].found === true ? 'limegreen' : 'red'}`}}
            >
                <img src={Greedo} alt='portrait of Greedo'></img>
            </div>
        </div>
    )
}