import { combineReducers } from 'redux';
import upcomingFilms from './upcomingFilms'
import loginUser from './loginUser'
import favoriteReducer from './favoriteReducer'

const rootReducer = combineReducers({
  upcomingFilms,
  loginUser,
  favoriteReducer
})

export default rootReducer;
