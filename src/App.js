import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [showMovies, setShowMovies] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header showMovies={showMovies} setShowMovies={setShowMovies} />
        {showMovies && <MovieList />}
      </div>
    </Router>
  );
}

export default App;
