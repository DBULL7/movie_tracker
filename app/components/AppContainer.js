import { connect } from 'react-redux';
import App from './app';
// import actions
import { upcomingFilms } from './actions/index';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  upcomingFilms: () => {
    console.log('fired dispatch to container upcomingFilms');
    dispatch(upcomingFilms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
