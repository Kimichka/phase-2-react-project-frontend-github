import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SeriesList from './components/SeriesList'; 
import MovieDetail from './components/MovieDetail';
import SeriesDetail from './components/SeriesDetail';
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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/series" element={<SeriesList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/series/:id" element={<SeriesDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
const Home = () => {
  return <h1>Welcome to the Home Page!</h1>;
}

export default App;
