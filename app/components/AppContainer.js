import { connect } from 'react-redux';
import App from './app';
import { upcomingFilms, loginUser } from '../actions/index'

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpcomingFilms: (movies) => {
      dispatch(upcomingFilms(movies))
    },
    handleLoginUser: (login) => {
      dispatch(loginUser(login))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
