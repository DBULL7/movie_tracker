import { combineReducers } from 'redux';
import upcomingFilms from './upcomingFilms'
import loginUser from './loginUser'
import favoriteReducer from './favoriteReducer'
import allFavorites from './allFavorites'

const rootReducer = combineReducers({
  upcomingFilms,
  loginUser,
  favoriteReducer,
  allFavorites,
})

export default rootReducer;
