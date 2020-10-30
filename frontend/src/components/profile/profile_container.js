import { connect } from 'react-redux';
import { fetchEvents, deleteEvent } from '../../actions/event_actions';
import { fetchUser } from '../../actions/users_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  debugger
  const currentUser = state.session.user
  const events = Object.values(state.events).filter(event => event.host_id === ownProps.match.params.user_id)
  return {
    events,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    // fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);