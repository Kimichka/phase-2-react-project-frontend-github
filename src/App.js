import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SeriesList from './components/SeriesList'; 
import MovieDetail from './components/MovieDetail';
import './App.css';

function App() {
  const [showMovies, setShowMovies] = useState(false);
  const [showSeries, setShowSeries] = useState(false); 

  return (
    <Router>
      <div className="App">
        <Header showMovies={showMovies} setShowMovies={setShowMovies} setShowSeries={setShowSeries} /> 
        {showMovies && <MovieList />}
        {showSeries && <SeriesList />} 
        <Routes>
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
