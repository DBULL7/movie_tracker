import getNewFilms from '../helpers/getNewFilms'
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
  console.log(loginUser);
  return {
    type: "LOGIN_USER",
    loginUser
  }
}

export const apiCall = () => {
  return (dispatch) => {
    return getNewFilms().then((movies) => {
    dispatch(upcomingFilms(movies))
  }).catch(error => {throw(error)})
  }
}
