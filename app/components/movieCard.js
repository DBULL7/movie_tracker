import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = ({ title, overview, release_date, poster_path }) => {
  return (
    <article className='movie'>
      <h3 className="movie-content">{title}</h3>
      <img className="movie-content" src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
      <p className="movie-content">{release_date}</p>
      <p className="movie-content">{overview}</p>
    </article>
  );
};
