import React, {useState, useEffect} from "react";
import { characterArray } from '../App.js';
import { Helpers } from './HelperFuncs.js';

//individual card class
const Card = props => {

    const handleClick = async () => {
        let objArray = JSON.parse(localStorage.getItem("memoryObjArray"));
        let scoresArray = JSON.parse(localStorage.getItem('memoryScoreArray'));
        Helpers.minimizeCards();
        if(objArray[props.number].clicked == false) {

            //update current score and set clicked to true
            scoresArray.currentScore = scoresArray.currentScore + 1;
            scoresArray.roundScore = scoresArray.roundScore + 1
            objArray[props.number].clicked = true;

            //update best score if applicable
            if(scoresArray.currentScore > scoresArray.bestScore) {
                scoresArray.bestScore = scoresArray.bestScore + 1;
                console.log("new best triggered");
            }

            console.log(scoresArray.roundScore);
            //set more cards if level has been passed
            if(scoresArray.roundScore == ((props.level) * 5)) {
                scoresArray.roundScore = 0;
                localStorage.setItem('memoryScoreArray', JSON.stringify(scoresArray));
                localStorage.setItem('memoryObjArray', JSON.stringify(characterArray));

                console.log('level 1 complete');
                props.levelCleared();

            } else {
                localStorage.setItem('memoryObjArray', JSON.stringify(objArray));
                localStorage.setItem('memoryScoreArray', JSON.stringify(scoresArray));
                props.randomize();
            }
        
            props.firstClick();
        
        } else {
            let counter = ((props.level) * 5) - scoresArray.roundScore;
          
            props.secondClick();
            setTimeout(() => {alert(`Ooof ${props.charName} is has already been selected \nyou had ${counter} unique options left!`)}, 55);;
        }
        
    }


    return (
        <div onClick={handleClick}>
            <div className="single-card-container">
                <div className='card-photo'>
                    <img className="card-photo-img" src={props.charURL}/>
                </div>
                <span className='top-span'>______________________</span>
                <div className="card-caption">{props.charName}</div>
            </div>

        </div>
    )
}

//card container class
const CardContainer = props => {

    let arraySize = 38;
    let numArray = [1, 2, 3, 4, 5]
    let [orderedArray, setOrderedArray] = useState([]);
    let [level, setLevel] = useState(1);

    useEffect(() => {
        getLevelNums();
        return() => {
            console.log("unmounting...");
        }
    }, [level])

    const updateLevel = () => {
        console.log('check the level');
        setLevel(prevLevel => prevLevel + 1);
        props.changeRemaining(level + 1);
        console.log('check the level');
    }

    const getLevelNums = () => {
        let iterations = level * 5;
        let imagesArray = [];
        while (imagesArray.length < iterations) {
            let indexNum = parseInt(Math.random() * 38);
            if((imagesArray.find(el => el == indexNum)) ==  undefined) {
                imagesArray.push(indexNum);
            }
        }
        // console.log(imagesArray);
        makeRandomOrder(imagesArray);
    }


    const makeRandomOrder = (someArray) => {
        let helperArray = [];
        for(let i = 0; i < someArray.length; i++) {
            let targetIndex;
            if(i <= numArray.length / 2) {
                targetIndex = parseInt(Math.random() * helperArray.length);
            } else {
                targetIndex = parseInt(Math.random() * helperArray.length) + 1;
            }
            
            helperArray.splice(targetIndex, 0, someArray[i]);
        }
        // console.log(helperArray);
        setOrderedArray(helperArray);
    }

    return (
        <div>
            <div className="main-card-container">
                <div className='left-column'></div>
                <div className='right-column'></div>
                {
                    orderedArray.map((num, index) => {
                            return <Card number={num} level={level} levelCleared={updateLevel} charURL={characterArray[num].url} charName={characterArray[num].name} 
                            key={index} randomize={() => makeRandomOrder(orderedArray)} firstClick={() =>  props.clickedEvent()} secondClick={() => props.gameLost()} ></Card>
                    })
        
                }
            </div>
        </div>
    )
}

export default CardContainer