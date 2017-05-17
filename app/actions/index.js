import getNewFilms from '../helpers/getNewFilms'
import thunk from 'redux-thunk'

// export const getMovies = (movies) => {
//   return {
//     type: 'GET_MOVIES',
//     movies
//   }
// }

export const upcomingFilms = (movies)  =>  {
  return {
    type: 'GET_MOVIES',
    movies
  }
}

export const apiCall = () => {
  return (dispatch) => {
    return getNewFilms().then((movies) => {
    dispatch(upcomingFilms(movies))
  }).catch(error => {throw(error)})
  }
}
