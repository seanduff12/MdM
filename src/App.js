import React from 'react';
import BestWorstMemes from './components/BestWorstMemes';
import './App.css';

const App = () => {
  const memes = [
    {
      id: 1,
      imageUrl: process.env.PUBLIC_URL + '/images/meme1.jpeg',
      votes: 0,
      comments: ['']
    },
    {
      id: 2,
      imageUrl: process.env.PUBLIC_URL + '/images/meme2.jpeg',
      votes: 0,
      comments: ['']
    }
  ];

  const bestMeme = memes.reduce((prev, current) => (prev.votes > current.votes ? prev : current));
  const worstMeme = memes.reduce((prev, current) => (prev.votes < current.votes ? prev : current));

  return (
    <div className="App">
      <h1>Ministerio de Memes</h1>
      <BestWorstMemes bestMeme={bestMeme} worstMeme={worstMeme} />
    </div>
  );
};

export default App;