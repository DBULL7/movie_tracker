import React from 'react';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../actions/'

export const Movie = (props) => {
  const film = props
  const { title, overview, release_date, poster_path, getFav, handleClick, displayMovie, isFav } = props
  console.log('FAVS AND SHIT');
  return (
    <article className='movie'>
      <article onClick={() => displayMovie(film)}>
        <h3 className="movie-content">{title}</h3>
        <img className="movie-content" src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
        <p className="movie-content">{release_date}</p>
        <p className="movie-content overview">{overview}</p>
      </article>
        <button className={isFav(title)} onClick={(e) => {
          getFav(film)}}>FAVORITE</button>
    </article>
  );
};
