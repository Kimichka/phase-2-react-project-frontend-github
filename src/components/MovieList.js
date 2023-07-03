import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2><Link to={`/movies/${movie.id}`}>{movie.title}</Link></h2>
          <p>Genre: {movie.genre}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
