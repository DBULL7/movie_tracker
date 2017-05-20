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
  console.log('login user', loginUser);
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

export const logoutUser = (user) => {
  type: 'LOGOUT_USER',
  user
}

export const apiCall = () => {
  return (dispatch) => {
    return getNewFilms().then((movies) => {
    dispatch(upcomingFilms(movies))
    }).catch(error => {throw(error)})
  }
}

export const getUserFavorites = (allFavorites) => {
  return {
    type: 'LOAD_FAVORITES',
    allFavorites
  }
}



// export const loadUsers = () => {
//   return (dispatch) => {
//     return getUsers().then((movies) => {
//       dispatch()
//     })
//   }
// }
