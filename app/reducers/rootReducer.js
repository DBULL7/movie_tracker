import { combineReducers } from 'redux';
import upcomingFilms from './upcomingFilms'
import createUser from './createUser'
import loginUser from './loginUser'

const rootReducer = combineReducers({
  upcomingFilms,
  createUser,
  loginUser,
})

export default rootReducer;
