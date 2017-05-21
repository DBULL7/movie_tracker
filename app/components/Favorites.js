import React, { Component } from 'react'
import { Movie } from './movieCard'
import { isFavorite } from '../helpers/isFavorite'
import { singleMovieCard } from '../helpers/singleMovieCard'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: {},
    }
  }

  handleFavorite(movie) {
    this.deleteFave(movie.id)
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
      console.log('RAAARGH', movie)
    }
  }

  singleMovie() {
    if(this.state.selectedMovie.title) {
      return (
        singleMovieCard(this.state.selectedMovie,
                        this.exitSingleMovie.bind(this),
                        this.handleFavorite.bind(this))
      )
    }
  }

  exitSingleMovie() {
    this.setState({selectedMovie: {}})
  }

  checkFav(title, type) {
    return isFavorite(title, type, this.props.allFavorites)
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

// if (props.loginUser.id) {
//   let id = props.loginUser.id
//   fetch(`api/users/${id}/favorites`)
//   .then((results) => results.json())
//   .then((data) => {
//     console.log(data);
//   }).catch((error) => {
//     console.log(error);
//   })
// }
