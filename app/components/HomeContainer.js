import { connect } from 'react-redux';
import Home from './Home';
import { toggleFavorite } from '../actions/index'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleFavorite: (film) => {
      dispatch(toggleFavorite(film))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
