import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/users_actions';
import { withRouter } from 'react-router-dom'

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
  }
};



export default withRouter(connect(
  mapStateToProps,
  { logout, fetchUser }
)(NavBar));