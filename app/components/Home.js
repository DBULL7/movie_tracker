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

  addFavorite(movie) {
    if (!this.props.loginUser.name) {
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

  render() {

    return(
      <section className="movie-section">
        <h2 className="home-title">Home</h2>
        <section className="movies">
            { this.props.upcomingFilms.map((movie) => <Movie handleClick={this.addFavorite.bind(this)} key={movie.id} {...movie} getFav={this.handleFavorite.bind(this)} />) }
        </section>
      </section>
    )
  }
}

export default Home
