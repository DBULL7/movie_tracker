import getNewFilms from '../helpers/getNewFilms'
import getUsers from '../helpers/usersApi'
import thunk from 'redux-thunk'


export const upcomingFilms = (movies)  =>  {
  return {
    type: 'GET_MOVIES',
    movies
  }
}

export const createAccount = (createAccount) => {
  return {
    type: 'CREATE_USER',
    createAccount
  }
}

export const loginUser = (loginUser) => {
  return {
    type: "LOGIN_USER",
    loginUser
  }
}

export const toggleFavorite = (film) => {
  return {
    type: 'TOGGLE_FAVORITE',
    film
  }
}

export const resetFavorites = (obj) => {
  return {
    type: 'RESET_FAVORITES',
    obj
  }
}

export const apiCall = () => {
  return (dispatch) => {
    return getNewFilms().then((movies) => {
    dispatch(upcomingFilms(movies))
    }).catch(error => {throw(error)})
  }
}

export const getUserFavorites = (allFavorites) => {
  console.log(allFavorites);
  return {
    type: 'LOAD_FAVORITES',
    allFavorites
  }
}
