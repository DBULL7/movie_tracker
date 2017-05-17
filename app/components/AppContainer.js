import { connect } from 'react-redux';
import App from './app';
import { upcomingFilms } from '../actions/index'

function mapStateToProps(state) {
<<<<<<< HEAD
  console.log(state);
  const newArray = [...state];
  console.log(newArray);
  let test = Object.assign({}, state, newArray)
  console.log(test);
  return test
=======
  return { movies: state.movies }
>>>>>>> 26a99b3e7c56628b7c1902319148dadcbdb935b0
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpcomingFilms: (movies) => {
      dispatch(upcomingFilms(movies))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
