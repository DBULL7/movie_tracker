import React, { Component } from 'react'

export const singleMovieCard = (movie, exitSingleMovie, handleFavorite, favsArray) => {
  return (
    <article className="single-movie">
      <div className="single-clicker" onClick={() => {exitSingleMovie()}}>
        <p className='single-movie-title'>{movie.title}</p>
        <div className="single-movie-info">
          <div className="single-movie-poster-container">
            <img className='single-movie-poster'
                 src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
           </div>
          <p className="single-movie-overview">{movie.overview}</p>
          <p className="single-movie-data">Release Date: {movie.release_date} |
                                           Vote Average: {movie.vote_average} |
                                           Vote Count: {movie.vote_count}</p>
        </div>
      </div>
      <button className={isFavorite(movie.title, favsArray)} onClick={(e) => {
          handleFavorite(movie)}}>FAVORITE</button>
    </article>
  )
}

const isFavorite = (filmTitle, favsArray) => {
  let isFav = 0;
  favsArray.forEach(val => {
    if(val.title === filmTitle) {
      isFav++
    }
  })
  return isFav === 0 ? 'single-movie-favorite' : 'single-movie-favorite single-movie-selected'
}
