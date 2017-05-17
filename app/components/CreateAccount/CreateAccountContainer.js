import { connect } from 'react-redux';
import CreateAccount from './CreateAccount';
import { createAccount } from '../../actions/index'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleCreateAccount: (user) => {
      dispatch(createAccount(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
