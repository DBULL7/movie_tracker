import { connect } from 'react-redux';
import CreateAccount from './CreateAccount';
import { loginUser } from '../../actions/index'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleCreateAccount: (user) => {
      dispatch(loginUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
