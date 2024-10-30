import React from 'react';
import WeeklyMemeCard from './components/WeeklyMemeCard';
import './App.css';

const WeeklyMeme = ({ bestMeme, worstMeme }) => {
  return (
    <div className="meme-container">
      <div className="meme-left">
        <h2>Mejor Meme Semanal</h2>
        <WeeklyMemeCard meme={bestMeme} />
      </div>
      <div className="meme-right">
        <h2>Peor Meme Semanal</h2>
        <WeeklyMemeCard meme={worstMeme} />
      </div>
    </div>
  );
};

export default WeeklyMeme;

