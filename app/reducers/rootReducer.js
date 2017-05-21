import { combineReducers } from 'redux';
import upcomingFilms from './upcomingFilms'
import loginUser from './loginUser'
import allFavorites from './allFavorites'

const rootReducer = combineReducers({
  upcomingFilms,
  loginUser,
  allFavorites,
})

export default rootReducer;
