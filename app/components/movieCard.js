import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = ({ title, overview, release_date, poster_path }) => {
  return (
    <div className='list-item'>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
      <p>{release_date}</p>
      <p>{overview}</p>
    </div>
  );
};
