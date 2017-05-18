import { connect } from 'react-redux';
import { Home } from './Home';
// import actions

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(Home)
