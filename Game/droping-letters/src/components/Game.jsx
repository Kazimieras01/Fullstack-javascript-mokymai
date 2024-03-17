import { useState, useEffect } from 'react';
import './Game.css';
import EndGame from './EndGame';

const Game = () => {
  const [all] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const [list, setList] = useState([{ letter: 'A', id: 1 }]);
  const [score, setScore] = useState(0);
  const [miss, setMiss] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = String.fromCharCode(e.keyCode);
      const correctLetter = list[0]?.letter;

      if (key === correctLetter) {
        handleCorrectKeyPress();
      }
    };

    const handleCorrectKeyPress = () => {
      // Remove the first letter
      const newList = list.slice(1);

      // Increase the score
      setScore((prevScore) => prevScore + 10);

      // Generate new letter at a random left position
      const left = Math.floor(Math.random() * (window.innerWidth - 100)) + 50;
      const num = Math.floor(Math.random() * (all.length - 1 + 1 - 0) + 0);
      const newLetter = { letter: all[num], id: Date.now() };

      // Reset box position and set new letter
      setList([...newList, newLetter]);
      resetBox(left);
    };

    const handleMissKeyPress = () => {
      // Remove the first letter
      const newList = list.slice(1);

      // Increase the score
      setMiss((prevMiss) => prevMiss + 1);

      // Generate new letter at a random left position
      const left = Math.floor(Math.random() * (window.innerWidth - 100)) + 50;
      const num = Math.floor(Math.random() * (all.length - 1 + 1 - 0) + 0);
      const newLetter = { letter: all[num], id: Date.now() };

      // Reset box position and set new letter
      setList([...newList, newLetter]);
      resetBox(left);
    };

    const resetBox = (left) => {
      const box = document.getElementById('box');

      // Reset box position to the top
      box.style.top = '0';

      // Set new left position for the box
      box.style.left = `${left}px`;
    };

    const moveBox = () => {
      const box = document.getElementById('box');
      const boxRect = box.getBoundingClientRect();
    
      if (boxRect.top >= 800) {
        // If the box reaches 800px from the top, simulate correct key press
        handleMissKeyPress();
      } else {
        // Adjust the movement factor based on the score
        const oldTop = box.offsetTop;
    
        // Define the base movement factor and the increment per score milestone
        const baseMovementFactor = 1;
        const incrementPerMilestone = 0.5;
    
        // Calculate the movement factor based on the score milestones
        const milestone = Math.floor(score / 100); // Adjust the milestone value as needed
        const movementFactor = baseMovementFactor + milestone * incrementPerMilestone;
    
        const newTop = oldTop + movementFactor;
        box.style.top = `${newTop}px`;
      }
    };

    const time = setInterval(moveBox,);

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup on component unmount
    return () => {
      clearInterval(time);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [all, list]);

  const heartsToShow = 5 - miss;
   if (heartsToShow === 0) {
    return <EndGame score={score} />;
   }

  return (
    <div id="app">
      <div id="box" className="falling-letters">
        {list.map((item) => (
          <span key={item.id} className={`letter-${item.letter}`}>
            {item.letter}
          </span>
        ))}
      </div>
      <div id='results'>
        <div id="score">Score: {score}</div>
        <div id="lives">
          {[...Array(heartsToShow)].map((_, index) => (
            <img key={index} src="./assets/heart.svg" alt="" />
          ))}
        </div>
      </div>
      {/* <video className='video-bg' autoPlay muted loop>
        <source src="./assets/gamol.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Game;