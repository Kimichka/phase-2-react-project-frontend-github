import React, { useState, useEffect } from 'react';

const CommentSection = ({ id, type }) => {
  const [comments, setComments] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/${type}/${id}`)
      .then(response => response.json())
      .then(data => setComments(data.comments));
  }, [id, type]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/${type}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comments: input,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setComments(data.comments);
        setInput('');
      });
  };

  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <label>
          Add a comment:
          <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Comments: {comments}</p>
    </div>
  );
};

export default CommentSection;
