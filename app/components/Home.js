import React from 'react';
import { Movie } from './movieCard'

export const Home = ({upcomingFilms}) => {
  return(
    <section>
      <h2 className="home-title">Home</h2>
      { upcomingFilms.map((movie) => <Movie key={movie.id} {...movie} />) }
   </section>
  )
}
