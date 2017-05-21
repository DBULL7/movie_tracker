import { connect } from 'react-redux';
import { loadUserSuccess } from '../../actions/index'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleLoadUser: (user) => {
      dispatch(loadUserSuccess(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
