import { connect } from 'react-redux';
import App from './app';
import upcomingFilms from '../Actions/index';

function mapStateToProps(state) {
  console.log(state);
  const newArray = [...state];
  console.log(newArray);
  let test = Object.assign({}, state, newArray)
  console.log(test);
  return test
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpcomingFilms: (payload) => {
      dispatch(upcomingFilms(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
