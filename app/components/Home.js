import React, { Component } from 'react';
import { Movie } from './movieCard'


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      popup: false,
    }
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

  addFavorite(movie) {
    if (!this.props.loginUser.name) {
      this.setState({popup: true})
      return
    }
    const {title, overview, release_date, poster_path, id, vote_average} = movie
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

  test() {
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
          {this.fadeOut()}
        </article>
      )
    }
  }

  render() {

    return(
      <section className="movie-section">
        {this.test()}
        <section className="movies">
            { this.props.upcomingFilms.map((movie) => <Movie handleClick={this.addFavorite.bind(this)} key={movie.id} {...movie} getFav={this.handleFavorite.bind(this)} />) }
        </section>
      </section>
    )
  }
}

export default Home
