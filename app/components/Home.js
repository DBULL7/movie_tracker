import React, { Component } from 'react';
import { Movie } from './movieCard'


class Home extends Component {
  constructor(props){
    super(props)
    console.log('boogah', this.props)
  }

  handleFavorite(input) {
    const { id, overview, poster_path, release_date, title, vote_average, vote_count } = input
    this.props.handleToggleFavorite({id: id,
                                     overview: overview,
                                     poster_path: poster_path,
                                     release_date: release_date,
                                     title: title,
                                     vote_average: vote_average,
                                     vote_count: vote_count})
  }

  render() {

    return(
      <section className="movie-section">
        <section className="movies">
            { this.props.upcomingFilms.map((movie) => <Movie key={movie.id} {...movie} getFav={this.handleFavorite.bind(this)} />) }
        </section>
      </section>
    )
  }
}

export default Home
