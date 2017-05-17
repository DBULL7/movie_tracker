import { combineReducers } from 'redux';
import upcomingFilms from './upcomingFilms'
import createUser from './createUser'

const rootReducer = combineReducers({
  upcomingFilms,
  createUser,
})

export default rootReducer;
