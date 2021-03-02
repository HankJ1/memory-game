
import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import CardContainer from './components/Card'
import { Helpers } from './components/HelperFuncs.js'


function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [peopleRemaining, setPeopleRemaining] = useState(5);
  const [bestScore, setBestScore] = useState(0);
  let [someNum, setSomeNum] = useState(1);
  let [level, setLevel] = useState(1);
  

  //set local storage for iamges and scores
  useEffect(() => {
    localStorage.setItem('memoryObjArray', JSON.stringify(characterArray));
    let scores = JSON.parse(localStorage.getItem("memoryScoreArray"));
    console.log(scores);
   
   if(scores !== null) {
     scores.currentScore = 0;
     scores.roundScore = 0;
     localStorage.setItem('memoryScoreArray', JSON.stringify(scores));
     setBestScore(scores.bestScore);
   } else {
    localStorage.setItem('memoryScoreArray', JSON.stringify({currentScore: 0, roundScore: 0, bestScore: 0}));
   }
  }, [])

  const updateRemaining = (childInput) => {
    console.log(childInput);
    setPeopleRemaining(childInput * 5);
    setLevel(prevLevel => prevLevel + 1);
    if(level == 7) {
      alert("Congratulations you did It!!!! You have the memory of \n My Octopus Teacher!");

      localStorage.setItem('memoryObjArray', JSON.stringify(characterArray));
      localStorage.setItem('memoryScoreArray', JSON.stringify({currentScore: 0, roundScore: 0, bestScore: bestScore}));
      setCurrentScore(0);
      setPeopleRemaining(5);
      setLevel(1);

      setSomeNum(Math.random() * 1);
    }
  }

  //update scores display
  const onSuccessfullClick = () => {
    let scores = JSON.parse(localStorage.getItem("memoryScoreArray"));
    setCurrentScore(prevScore => prevScore + 1);
    setBestScore(scores.bestScore);

    if(scores.roundScore !== 0) {
      setPeopleRemaining(prevPeople => prevPeople - 1);
    }
  }

  //reset everything
  const onUnSuccessfullClick = () => {
    console.log('unsuccessful click entered...');
    localStorage.setItem('memoryObjArray', JSON.stringify(characterArray));
    localStorage.setItem('memoryScoreArray', JSON.stringify({currentScore: 0, roundScore: 0, bestScore: bestScore}));
    setCurrentScore(0);
    setPeopleRemaining(5);
    setLevel(1);

    Helpers.createRedScreen();

    setSomeNum(Math.random() * 1);
    
  }

  return (
    <div className="total-memory-card">
      <Header recievedCurrentScore={currentScore} level={level} recievedBestScore={bestScore} remainingPeople={peopleRemaining}></Header>
      <CardContainer  gameLost={onUnSuccessfullClick} key={someNum} clickedEvent={onSuccessfullClick} changeRemaining={(someInput) => updateRemaining(someInput)}></CardContainer>
      
      
    </div>
  );
}

export default App;

function testing() {
  console.log('testing');
}

const dataArray = [
  {
      number: 1,
      clicked: false
  },
  {
      number: 2,
      clicked: false
  },
  {
      number: 3,
      clicked: false
  },
  {
      number: 4,
      clicked: false
  },
  {
      number: 5,
      clicked: false
  },
  {
      number: 6,
      clicked: false
  },
  {
      number: 7,
      clicked: false
  },
  {
      number: 8,
      clicked: false
  },
  {
      number: 9,
      clicked: false
  },
  {
      number: 10,
      clicked: false
  }
]

export const characterArray = [
  {
    name: "Achilles",
    url: "./images/achilles.jpg",
    clicked: false
  },
  {
    name: 'Jack Sparrow',
    url: "./images/also-jack-sparrow.png",
    clicked: false
  },
  {
    name: "Alvin Kamara",
    url: "./images/alvin-kamara.jpg",
    clicked: false
  },
  {
    name: "Arya Stark",
    url: "./images/arya-stark.jpg",
    clicked: false
  },
  {
    name: "Ash Ketchum",
    url: "./images/ash-ketchum.png",
    clicked: false
  },
  {
    name: "Berry O",
    url: "./images/barrack-obama.jpg",
    clicked: false
  },
  {
    name: "Ben Rickert",
    url: "./images/bigshort-pitt.jpg",
    clicked: false
  },
  {
    name: "Billy Red Sack",
    url: "./images/bill-burr.jpeg",
    clicked: false
  },
  {
    name: "Black Widow",
    url: "./images/black-widow.jpg",
    clicked: false
  },
  {
    name: "Elizabeth Swann",
    url: "./images/elizabeth-swann.jpg",
    clicked: false
  },
  {
    name: "Emily Blunt",
    url: "./images/emily-blunt-edge-of-tomorrow.jpg",
    clicked: false
  },
  {
    name: "Salted Pork",
    url: "./images/gimlie.jpg",
    clicked: false
  },
  {
    name: "Chris Tucker",
    url: "./images/chris-tucker.jpg",
    clicked: false
  },
  {
    name: "National Treasure",
    url: "./images/girl-from-national-treasure.jpg",
    clicked: false
  },
  {
    name: "Godzilla!",
    url: "./images/godzilla.jpg",
    clicked: false
  },
  {
    name: "Hermoine Granger",
    url: "./images/hermoine-granger.jpg",
    clicked: false
  },
  {
    name: "Honest Abe",
    url: "./images/honest-abe.jpeg",
    clicked: false
  },
  {
    name: "Killin Nazis",
    url: "./images/inglorious-bastards-pitt.jpg",
    clicked: false
  },
  {
    name: "Jack Sparrow",
    url: "./images/jack-sparrow.jpg",
    clicked: false
  },
  {
    name: "Jean K Jean",
    url: "./images/jean-k-jean.png",
    clicked: false
  },
  {
    name: "Jessica Day",
    url: "./images/jessica-day.jpeg",
    clicked: false
  },
  {
    name: "My Watch has Ended",
    url: "./images/jon-snow.jpg",
    clicked: false
  },
  {
    name: "Khal Drogo",
    url: "./images/khal-drogo.jpg",
    clicked: false
  },
  {
    name: "Killua",
    url: "./images/killua.jpg",
    clicked: false
  },
  {
    name: "Boi",
    url: "./images/kratos.png",
    clicked: false
  },
  {
    name: "Lady Mormont",
    url: "./images/lady-mormont.jpg",
    clicked: false
  },
  {
    name: "Margaery Tyrell",
    url: "./images/Margaery-Tyrell.jpg",
    clicked: false
  },
  {
    name: "Mikey the Pikey",
    url: "./images/mike-the-pike.jpg",
    clicked: false
  },
  {
    name: "Mr. Smith",
    url: "./images/mr-smith-pitt.jpg",
    clicked: false
  },
  {
    name: "My Octopus Teacher",
    url: "./images/my-octopus-teacher.jpeg",
    clicked: false
  },
  {
    name: "Nasim Pedrad",
    url: "./images/nasim-pedrad.jpg",
    clicked: false
  },
  {
    name: "Nikki Glaser",
    url: "./images/nikki-glaser.jpg",
    clicked: false
  },
  {
    name: "Professor Snape",
    url: "./images/professor-snape.jpg",
    clicked: false
  },
  {
    name: "Middle Aged Man",
    url: "./images/stock-footage-guy.jpg",
    clicked: false
  },
  {
    name: "Tyler Durden",
    url: "./images/tyler-durden.jpg",
    clicked: false
  },
  {
    name: "Winnie the Bish",
    url: "./images/winnie-the-bish.jpg",
    clicked: false
  },
  {
    name: "Ygritte",
    url: "./images/Ygritte.jpg",
    clicked: false
  },
  {
    name: "Mystic Mac",
    url: "./images/conor-mcgregor.jpg",
    clicked: false
  },
]

