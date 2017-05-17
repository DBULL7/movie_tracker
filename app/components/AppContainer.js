import { connect } from 'react-redux';
import App from './app';
// import actions
import upcomingFilms from '../Actions/index';

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleupcomingFilms: (payload) => {
      dispatch(upcomingFilms(payload))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
