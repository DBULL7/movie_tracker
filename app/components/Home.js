import React from 'react';
import { Movie } from './movieCard'

export const Home = ({upcomingFilms}) => {
  console.log(upcomingFilms);
  return(
    <section className="movie-section">
      <h2 className="home-title">Home</h2>
      <section className="movies">
        { upcomingFilms.map((movie) => <Movie key={movie.id} {...movie} />) }
      </section>
    </section>
  )
}
