import React, { useState, useEffect } from 'react';

function CommentSection({ type, id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/${type}/${id}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setComments(data);
      })
      .catch(error => console.error('Error:', error));
  }, [id, type]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    let commentData = {
      comment: newComment,
      contentId: id
    };

    fetch(`http://localhost:3001/${type}/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then(response => response.json())
      .then(data => {
        setComments(prevComments => [...prevComments, data]);
        setNewComment('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleCommentDelete = (commentId) => {
    fetch(`http://localhost:3001/${type}/${id}/comments/${commentId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.comment}
            <button onClick={() => handleCommentDelete(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} required />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}

export default CommentSection;
