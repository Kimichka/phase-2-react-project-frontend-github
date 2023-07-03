import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  if (movies.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Genre: {movie.genre}</p>
          <p>Series: {movie.series}</p>
          <p>Rating: {movie.rating}</p>
          <Link to={`/movies/${movie.id}`}>More Details</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
