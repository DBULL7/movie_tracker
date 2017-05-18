import { connect } from 'react-redux'
// import loadUser from './CreateAccount';
import {bindActionCreators} from 'redux'
import { toggleFavorite } from '../../actions/index'

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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
