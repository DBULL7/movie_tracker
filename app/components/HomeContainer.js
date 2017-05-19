import { connect } from 'react-redux';
import Home from './Home';
import { toggleFavorite } from '../actions/index'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleToggleFavorite: (film) => {
      dispatch(toggleFavorite(film))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
