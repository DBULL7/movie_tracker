import React from 'react';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../actions/'

export const Movie = (props) => {
  const film = props
  const { title, overview, release_date,
          vote_average, vote_count, poster_path,
          getFav, handleClick, displayMovie, isFav } = props
  return (
    <article className={isFavorite(title, 'card', isFav)}>
      <button className={isFavorite(title, 'button', isFav)} onClick={(e) => {
          getFav(film)}}>FAVORITE</button>
      <article onClick={() => displayMovie(film)}>
          <h3 className='movie-content-title'>{title}</h3>
          <img className='movie-content-poster'
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
          <div className="movie-content">
            <p className="movie-content-overview">{overview}</p>
            <div className="movie-content-data-container">
              <div className="movie-content-data-container-sub">
                <p className="movie-content-data-title">Release Date:</p>
                <p className="movie-content-data">{release_date}</p>
              </div>
              <div className="movie-content-data-container-sub">
                <p className="movie-content-data-title">Vote Average:</p>
                <p className="movie-content-data">{vote_average}</p>
              </div>
              <div className="movie-content-data-container-sub">
                <p className="movie-content-data">Vote Count:</p>
                <p className="movie-content-data">{vote_count}</p>
              </div>
            </div>
          </div>
      </article>
    </article>
  );
};

const isFavorite = (filmTitle, type, favsArray) => {
  let isFav = 0;
  favsArray.forEach(val => {
    if(val.title === filmTitle) {
      isFav++
    }
  })
  if(type === 'card') {
    return isFav === 0 ? 'movie' : 'movie movie-selected'
  }
  else if (type === 'button') {
    return isFav === 0 ? 'favorite' : 'favorite favorite-selected'
  }
}
