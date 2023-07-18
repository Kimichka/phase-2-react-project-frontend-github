import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const SeriesDetail = () => {
  const { id } = useParams();
  const [series, setSeries] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/series/${id}`)
      .then(response => response.json())
      .then(data => setSeries(data));
  }, [id]);

  if (!series) return <div>Loading...</div>;

  return (
    <div>
      <h1>{series.title}</h1>
      <p>Genre: {series.genre}</p>
      <p>Year Released: {series.year}</p>
      <p>Rating: {series.rating}</p>
      <p>Description: {series.description}</p>
      <CommentSection id={id} />
    </div>
  );
}

export default SeriesDetail;
