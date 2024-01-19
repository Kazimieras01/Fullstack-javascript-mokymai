import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './EndGame.css';
import Leaderboard from './Leaderboard';

const EndGame = ({ score }) => {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const navigate = useNavigate();
    

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/Scores', { name, score });
      navigate('/EndGame');
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };
  
  const handlePlayGameClick = () => {
    console.log("Play Again button clicked");
    // Navigate to the "Game" route
    navigate('/Game');
  };
  const handleMainClick = () => {
    // Navigate to the "Game" route
    navigate('/');
  };

  useEffect(() => {
    if (score===undefined) {
      setIsSubmitted(true);
    }
    // When isSubmitted is true, show the Leaderboard
    if (isSubmitted) {
      setShowLeaderboard(true);
    }
  }, [isSubmitted]);

  return (
    <div className='go'>
      <h1>GAME OVER</h1>
      {isSubmitted ? (
        <div className='links'>
          {/* Display links or buttons after submission */}
          <button onClick={handleMainClick}>Main Menu</button>
          <button onClick={handlePlayGameClick}>Play Again</button>
        </div>
      ) : (
        <div className='scores'>
          <h2>Your Score: {score}</h2>
          <label htmlFor='name'>Enter your name:</label> <br />
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {/* Render Leaderboard component if showLeaderboard is true */}
      {showLeaderboard && <Leaderboard />}
    </div>
  );
};

EndGame.propTypes = {
  score: PropTypes.number.isRequired,
};

export default EndGame;
