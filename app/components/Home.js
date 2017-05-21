import React, { Component } from 'react';
import { Movie } from './movieCard'
import { isFavorite } from '../helpers/isFavorite'


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      popup: false,
      selectedMovie: {},
    }
  }

  check(){
    console.log('check!');
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
      this.setState({popup: false})
    }, 3000)
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
        <article className="popup">
          <div className="popup-header">
            <button className="popup-exit-button" onClick={() => {this.exitPopup()}}>&times;</button>
          </div>
          <div>
            <p className='popup-message'>Login or Create an Account to Favorite Movies</p>
            <div className="popup-buttons">
              <button className='login-popup-button' onClick={() => {this.changePath('Login')}}>Login</button>
              <button className='createAccount-popup-button' onClick={() => {this.changePath('CreateAccount')}}>CreateAccount</button>
            </div>
          </div>
        </article>
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
        <article className="single-movie">
          <div onClick={() => {this.exitSingleMovie()}}>
            <p className='single-movie-title'>{this.state.selectedMovie.title}</p>
            <div className="single-movie-info">
              <div className="single-movie-poster-container">
                <img className='single-movie-poster'
                     src={`https://image.tmdb.org/t/p/w300/${this.state.selectedMovie.poster_path}`} />
               </div>
              <p className="single-movie-overview">{this.state.selectedMovie.overview}</p>
              <p className="single-movie-data">Release Date: {this.state.selectedMovie.release_date} |
                                               Vote Average: {this.state.selectedMovie.vote_average} |
                                               Vote Count: {this.state.selectedMovie.vote_count}</p>
            </div>
          </div>
          <button className='single-movie-favorite' onClick={(e) => {
              this.handleFavorite(this.state.selectedMovie)}}>FAVORITE</button>
        </article>
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
        <section className="movies">
            { this.props.upcomingFilms.map((movie) =>
                        <Movie displayMovie={this.showMovie.bind(this)}
                               key={movie.id} {...movie}
                               getFav={this.handleFavorite.bind(this)}
                               isFav={this.props.allFavorites}/>) }
        </section>
        {this.singleMovie()}
        {this.popup()}
      </section>
    )
  }
}

export default Home
