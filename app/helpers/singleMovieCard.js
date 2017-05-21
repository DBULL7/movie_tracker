import React, { Component } from 'react'

export const singleMovieCard = (movie, exitSingleMovie, handleFavorite) => {
  console.log('ALL THE SINGLE MOVIES', movie);
  return (
    <article className="single-movie">
      <div onClick={() => {exitSingleMovie()}}>
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
      <button className='single-movie-favorite' onClick={(e) => {
          handleFavorite(movie)}}>FAVORITE</button>
    </article>
  )
}
