import React, { Component } from 'react'
import { Movie } from './movieCard'

class Favorites extends Component {
  constructor(props) {
    super(props)
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
    const { loginUser } = this.props
    fetch(`http://localhost:3000/api/users/${loginUser.id}/favorites/${movieID}`, {
      method: "DELETE",
    }).then((results) => {
      console.log(results);
    })
  }

  render() {

    return(
      <section className="movie-section">
        <h2 className="home-title">Favorites</h2>
        <section className="movies">
            { this.props.favoriteReducer.map((movie) => <Movie key={movie.id} {...movie} getFav={this.handleFavorite.bind(this)} />) }
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
