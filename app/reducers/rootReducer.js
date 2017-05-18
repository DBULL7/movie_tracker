import { combineReducers } from 'redux';
import upcomingFilms from './upcomingFilms'
import createUser from './createUser'
import loginUser from './loginUser'
import favoriteReducer from './favoriteReducer'

const rootReducer = combineReducers({
  upcomingFilms,
  createUser,
  loginUser,
  favoriteReducer
})

export default rootReducer;
