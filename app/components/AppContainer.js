import { connect } from 'react-redux';
import App from './app';
import { upcomingFilms, loginUser, getUserFavorites } from '../actions/index'

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpcomingFilms: (movies) => {
      dispatch(upcomingFilms(movies))
    },
    handleLoginUser: (login) => {
      dispatch(loginUser(login))
    },
    handleGetAllFavorites: (allFavorites) => {
      dispatch(getUserFavorites(allFavorites))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
