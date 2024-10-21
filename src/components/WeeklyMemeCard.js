import React, { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import '../App.css';

const WeeklyMemeCard = ({ meme }) => {
  const [comments, setComments] = useState(meme.comments || []);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="meme-card modern-card">
      <div className="meme-content">
        <img src={meme.imageUrl} alt="Meme" />
        <div className="comments-section">
          <h4><FaCommentAlt /> Comentarios</h4>
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
          <div className="add-comment">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Agregar un comentario"
            />
            <button onClick={handleAddComment}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyMemeCard;
