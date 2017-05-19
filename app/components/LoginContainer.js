import { connect } from 'react-redux';
import Login from './Login';
import { loginUser } from '../actions/index'

function mapDispatchToProps(dispatch) {
  return {  
    handleLoginUser: (login) => {
      dispatch(loginUser(login))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
