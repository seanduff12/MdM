import React, { useState } from 'react';

const MemeCard = ({ meme, type }) => {
  const [votes, setVotes] = useState(meme.votes);
  const [comments, setComments] = useState(meme.comments);
  const [newComment, setNewComment] = useState('');

  const handleVote = (type) => {
    setVotes(type === 'up' ? votes + 1 : votes - 1);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className={`meme-card ${type}-meme`}>
      <img src={meme.imageUrl} alt="meme" />
      <div className="votes-section">
        <button className="vote-button" onClick={() => handleVote('up')}>👍</button>
        <button className="vote-button" onClick={() => handleVote('down')}>👎</button>
        <span>Votos: {votes}</span>
      </div>
      <div className="comments-section">
        <h4>Comentarios:</h4>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <div className="add-comment">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Agregar un comentario"
            className="comment-input"
          />
          <button className="add-comment-button" onClick={handleAddComment}>Agregar</button>
        </div>
      </div>
    </div>
  );
};


export default MemeCard;