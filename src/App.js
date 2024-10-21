import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Index from './index';
import HistoricalMemes from './HistoricalMemes';
import WeeklyMeme from './WeeklyMemes';
import './App.css';

const App = () => {
  const memes = [
    { id: 1, imageUrl: '/images/meme1.jpeg', votes: 0, comments: [] },
    { id: 2, imageUrl: '/images/meme2.jpeg', votes: 0, comments: [] }
  ];

  const bestMeme = memes[0];
  const worstMeme = memes[1];

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/historical">Memes Históricos</Link>
        <Link to="/weekly">Meme de la Semana</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/historical" element={<HistoricalMemes bestMeme={bestMeme} worstMeme={worstMeme} />} />
        <Route path="/weekly" element={<WeeklyMeme bestMeme={bestMeme} worstMeme={worstMeme} />} />
      </Routes>
    </Router>
  );
};

export default App;
