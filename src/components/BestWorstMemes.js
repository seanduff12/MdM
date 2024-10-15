import React from 'react';
import MemeCard from './MemeCard';

const BestWorstMemes = ({ bestMeme, worstMeme }) => {
  return (
    <div className="best-worst-memes">
      <div className="best-meme-section">
        <h2>Piedra de la Victoria</h2>
        <MemeCard meme={bestMeme} type="best" />
      </div>
      <div className="worst-meme-section">
        <h2>Piedra de la Verguenza</h2>
        <MemeCard meme={worstMeme} type="worst" />
      </div>
    </div>
  );
};

export default BestWorstMemes;