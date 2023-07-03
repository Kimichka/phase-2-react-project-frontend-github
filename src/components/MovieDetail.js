import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      <p>Series: {movie.series}</p>
      <p>Rating: {movie.rating}</p>
      <p>Description: {movie.description}</p>
    </div>
  );
}

export default MovieDetail;
