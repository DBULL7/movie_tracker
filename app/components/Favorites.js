import React, { Component } from 'react'
import { Movie } from './movieCard'
import { isFavorite } from '../helpers/isFavorite'

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
    this.props.state.handleToggleFavorite({id: id,
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
        {this.singleMovie()}
        <h2 className="home-title">Favorites</h2>
        <section className="movies">
            { this.props.allFavorites.map((movie) =>
              <Movie displayMovie={this.showMovie.bind(this)}
                     key={movie.id} {...movie}
                     getFav={this.handleFavorite.bind(this)}
                     isFav={this.props.allFavorites} />) }

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
