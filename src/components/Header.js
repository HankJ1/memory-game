import React, {useState, useEffect} from 'react';
import '../App.css'

const Header = props => {

    return (
        <div>
            <div className="header-container">
                <div className="logo">Level <span className='score-num'>{props.level}</span> / 7</div>
                <div className="title">
                    <h3>Pop Culture Memory Test</h3>
                    <h4>True Geniuses Only</h4>
                </div>
                <div className="score-container">
                    <div className="score-container-sub" id="current-score">Current Score:</div> <span className='score-span'>{props.recievedCurrentScore}</span>
                    <div className="score-container-sub" id="people-remaining">Remaining:</div><span className='score-span'>{props.remainingPeople}</span>
                    <div className="score-container-sub" id="best-score">Best Score:</div><span className='score-span'>{props.recievedBestScore}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;