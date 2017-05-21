import React, { Component } from 'react';
import { Movie } from './movieCard'
import { isFavorite } from '../helpers/isFavorite'
import { singleMovieCard } from '../helpers/singleMovieCard'
import { popUp } from '../helpers/popUp'


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      popup: false,
      selectedMovie: {},
      favoritesChangedVar: false,
    }
  }

  handleFavorite(input) {
    this.addFavorite(input)
    if(this.props.loginUser.email) {
      const { id, overview, poster_path, release_date, title, vote_average, vote_count } = input
      this.props.handleToggleFavorite({id: id,
                                       overview: overview,
                                       poster_path: poster_path,
                                       release_date: release_date,
                                       title: title,
                                       vote_average: vote_average,
                                       vote_count: vote_count})
    }
  }


  compareTitles(movie) {
    let test = true
    this.props.allFavorites.forEach((favoritedMovie) => {
      if (movie.title === favoritedMovie.title) {
        test = false
      }
    })
    return test
  }

  checkDatabase(movie) {
    return (this.compareTitles(movie))
  }

  deleteFave(movie) {
    const { id } = this.props.loginUser

    fetch(`http://localhost:3000/api/users/${id}/favorites/${movie.id}`, {
      method: "DELETE",
    }).then((results) => {
      console.log(results);
    })
  }

  addFavorite(movie) {
    if (!this.props.loginUser.email) {
      this.setState({popup: true})
      return
    }

    if(!this.checkDatabase(movie)) {
      this.deleteFave(movie)
      console.log('Already in the DB')
      return
    }
    this.setState({favoritesChangedVar: true})
    this.fadeOut()

    const {title, overview, release_date, poster_path, id, vote_count, vote_average} = movie

    fetch('api/users/favorites/new', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        title: title,
        overview: overview,
        release_date: release_date,
        poster_path: poster_path,
        user_id: this.props.loginUser.id,
        movie_id: id,
        vote_average: vote_average,
        vote_count: vote_count,
        overview: overview,
      })
    }).then((results) => results.json())
    .then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })
  }

  fadeOut() {
    setTimeout(() => {
      this.setState({favoritesChangedVar: false})
    }, 200)
  }

  exitPopup() {
    this.setState({popup: false})
  }

  changePath(route) {
    this.props.history.replace(`/${route}`)
  }

  popup() {
    if(this.state.popup) {
      return (
        popUp(this.exitPopup.bind(this), this.changePath.bind(this))
      )
    }
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

  favoritesChange(){
    if(this.state.favoritesChangedVar === true) {
      return(
        <div>
        </div>
      )
    }
  }

  render() {
    return(
      <section className="movie-section">
        <section className="movies">
            { this.props.upcomingFilms.map((movie) =>
                        <Movie displayMovie={this.showMovie.bind(this)}
                               key={movie.id} {...movie}
                               getFav={this.handleFavorite.bind(this)}
                               isFav={this.props.allFavorites}/>) }
        </section>
        {this.singleMovie()}
        {this.popup()}
        {this.favoritesChange()}
      </section>
    )
  }
}

export default Home
