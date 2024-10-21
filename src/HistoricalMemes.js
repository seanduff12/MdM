import React from 'react';
import HistoricalMemeCard from './components/HistoricalMemeCard';
import './App.css';

const HistoricalMemes = ({ bestMeme, worstMeme }) => {
  return (
    <div className="meme-container">
      <HistoricalMemeCard meme={bestMeme} />
      <HistoricalMemeCard meme={worstMeme} />
    </div>
  );
};

export default HistoricalMemes;
