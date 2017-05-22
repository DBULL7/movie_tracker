import { connect } from 'react-redux';
import CreateAccount from './CreateAccount';
import { loginUser } from '../../actions/index'

const mapStateToProps (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCreateAccount: (user) => {
      dispatch(loginUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
