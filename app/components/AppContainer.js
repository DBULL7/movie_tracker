import { connect } from 'react-redux';
import App from './app';
import upcomingFilms from '../Actions/index';

function mapStateToProps(state) {
  console.log(state);
  const newArray = [...state];
  return newArray
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpcomingFilms: (payload) => {
      dispatch(upcomingFilms(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
