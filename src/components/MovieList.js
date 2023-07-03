import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Movie = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Series: {movie.series}</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      {isExpanded && <p>Description: {movie.description}</p>}
    </div>
  );
}

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
        <Movie key={movie.id} movie={movie} />
      ))}
      <Outlet />
    </div>
  );
}

export default MovieList;
