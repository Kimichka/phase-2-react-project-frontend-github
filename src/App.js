import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    <Header showMovies={showMovies} setShowMovies={setShowMovies} showSeries={showSeries} setShowSeries={setShowSeries} />

    <Switch>
      <Route path="/" exact render={() => <h1>Welcome to the Home Page!</h1>} />
      <Route path="/home" render={() => <h1>Welcome to the Home Page!</h1>} />
      <Route path="/movies" exact component={MovieList} />
      <Route path="/series" exact component={SeriesList} />
      <Route path="/movie/:id" component={MovieDetail} />
      <Route path="/series/:id" component={SeriesDetail} />
    </Switch>
  </div>
</Router>
  );
}

export default App;
