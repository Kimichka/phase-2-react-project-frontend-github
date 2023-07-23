import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="movie-card">
      <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>
      <p>Genre: {movie.genre}</p>
      <p>Year Released: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      {isExpanded && <p>Description: {movie.description}</p>}
      <CommentSection id={movie.id} type="movies" />
    </div>
  );
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
