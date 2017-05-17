import { connect } from 'react-redux';
import { Home } from './Home';
// import actions

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
