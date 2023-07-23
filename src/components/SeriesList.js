import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import { Link } from 'react-router-dom';

const Series = ({ series }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="series-card">
      <h2><Link to={`/series/${series.id}`}>{series.title}</Link></h2>
      <p>Genre: {series.genre}</p>
      <p>Year Released: {series.year}</p>
      <p>Rating: {series.rating}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      {isExpanded && <p>Description: {series.description}</p>}
      <CommentSection id={series.id} type="series" />
    </div>
  );
};

const SeriesList = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/series')
      .then((res) => res.json())
      .then((data) => {setSeries(data);});
      
    },[]);

  return (
    <div className="series-container">
      {series.map((series) => (
        <Series key={series.id} series={series} />
      ))}
    </div>
  );
};

export default SeriesList;
