import { connect } from 'react-redux';
import Login from './Login';
import { loginUser, resetFavorites } from '../actions/index'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleLoginUser: (login) => {
      dispatch(loginUser(login))
    },
    handleResetFavorites: (obj) => {
      dispatch(resetFavorites(obj))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
