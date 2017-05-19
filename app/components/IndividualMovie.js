import React, { Component } from 'react'
import { Movie } from 'movieCard'

class IndividualMovie extends Component {
  constructor(props) {
    super(props)
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
        <h2 className="home-title">Favorites</h2>
        <section className="movies">
            <Movie key={movie.id} {...movie} getFav={this.handleFavorite.bind(this)} />
        </section>
      </section>
    )
  }
}

export default IndividualMovie
