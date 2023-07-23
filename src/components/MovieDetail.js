import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Genre: {movie.genre}</p>
      <p>Year Released: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <p>Description: {movie.description}</p>
      <CommentSection id={id} type="movies" />
    </div>
  );
}

export default MovieDetail;
