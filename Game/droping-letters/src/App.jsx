
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import EndGame from './components/EndGame';
import Leaderboard from './components/Leaderboard';
import MainScrean from './components/MainScrean';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainScrean />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/game" element={<Game />} />
          <Route path="/EndGame" element={<EndGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;