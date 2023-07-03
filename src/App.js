import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <h1>Welcome to Arnold Schwarzenegger Movies!</h1>
          </Route>
          <Route path="/movies" exact component={MovieList} />
          <Route path="/movies/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
