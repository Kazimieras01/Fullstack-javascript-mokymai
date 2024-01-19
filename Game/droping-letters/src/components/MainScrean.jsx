import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainScrean.css';
import Leaderboard from './Leaderboard';
import './Leaderboard.css'

const MainScrean = () => {
  const navigate = useNavigate();
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const handlePlayGameClick = () => {
    // Navigate to the "Game" route
    navigate('/Game');
  };

  const handleLeaderboardClick = () => {
    // Toggle the visibility of the leaderboard
    setShowLeaderboard((prev) => !prev);
  };

  return (
    <div className="main">
      <h1>Falling letters Game</h1>
      <button onClick={handlePlayGameClick}>Play Game</button>
      <button onClick={handleLeaderboardClick}>Leaderboard</button>

      {/* Render Leaderboard component if showLeaderboard is true */}
      {showLeaderboard && <Leaderboard />}
    </div>
  );
};

export default MainScrean;
