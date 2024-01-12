import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [letters, setLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    const handleKeyPress = (e) => {
      setCurrentKey(e.key.toUpperCase());
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const generateRandomLetter = () => {
      const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      const newLetter = {
        id: Date.now(),
        value: letter,
        top: -20,
        left: Math.random() * window.innerWidth,
      };

      setLetters((prevLetters) => [...prevLetters, newLetter]);
    };

    const interval = setInterval(generateRandomLetter, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkKeyPress = () => {
      setLetters((prevLetters) =>
        prevLetters.filter((letter) => {
          if (letter.value === currentKey) {
            setScore((prevScore) => prevScore + 1);
            return false;
          }
          return true;
        })
      );
    };

    checkKeyPress();
  }, [currentKey]);

  return (
    <div className="App">
      <h1>Letter Rain Game</h1>
      <p>Score: {score}</p>
      <div className="letters-container">
        {letters.map((letter) => (
          <div
            className="letter"
            key={letter.id}
            style={{ top: `${letter.top}px`, left: `${letter.left}px` }}
          >
            {letter.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;