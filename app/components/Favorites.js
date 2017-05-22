import React, { Component } from 'react'
import { Movie } from './movieCard'
import { singleMovieCard } from '../helpers/singleMovieCard'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: {},
    }
  }

  handleFavorite(movie) {
    this.deleteFave(movie.movie_id)
    const { id, overview, poster_path, release_date, title, vote_average, vote_count } = movie
    this.props.handleToggleFavorite({id: id,
                                     overview: overview,
                                     poster_path: poster_path,
                                     release_date: release_date,
                                     title: title,
                                     vote_average: vote_average,
                                     vote_count: vote_count})
  }

  deleteFave(movieID) {
    const { loginUser } = this.props.state

    fetch(`http://localhost:3000/api/users/${loginUser.id}/favorites/${movieID}`, {
      method: "DELETE",
    }).then((results) => {
      console.log('delete from base', results);
    })
  }

  showMovie(movie) {
    if(!this.state.selectedMovie.title) {
      this.setState({selectedMovie: movie})
    }
  }

  singleMovie() {
    if(this.state.selectedMovie.title) {
      return (
        singleMovieCard(this.state.selectedMovie,
                        this.exitSingleMovie.bind(this),
                        this.handleFavorite.bind(this),
                        this.props.state.allFavorites)
      )
    }
  }

  exitSingleMovie() {
    this.setState({selectedMovie: {}})
  }

  render() {

    return(
      <section className="movie-section">
        {this.singleMovie()}
        <h2 className="home-title">Favorites</h2>
        <section className="movies">
            { this.props.state.allFavorites.map((movie) =>
              <Movie displayMovie={this.showMovie.bind(this)}
                     key={movie.id} {...movie}
                     getFav={this.handleFavorite.bind(this)}
                     isFav={this.props.state.allFavorites} />) }

        </section>
      </section>
    )
  }
}

export default Favorites
