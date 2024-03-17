import { useEffect, useState } from 'react';
import axios from 'axios';
import './Leaderboard.css';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Fetch scores from your API
    const fetchScores = async () => {
      try {
        const response = await axios.get('mongodb+srv://skyline96gtr:gZadT5QY58cyqaix@cluster0.u0tk2qn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        const fetchedScores = response.data;

        // Sort scores from highest to lowest
        const sortedScores = fetchedScores.sort((a, b) => b.score - a.score);

        setScores(sortedScores);
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className='lead'>
      <h2>Leaderboard</h2>
      <ol>
        {scores.map((score) => (
          <li key={score._id}>
            {score.name} - {score.score} points
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;