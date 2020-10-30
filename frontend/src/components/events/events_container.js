import { connect } from 'react-redux';
import { fetchEvents, deleteEvent, updateEvent } from '../../actions/event_actions';
import { fetchUsers } from '../../actions/users_actions'
import Events from './events';

const mapStateToProps = (state) => {
  debugger
  return {
    currentUser: state.session.user,
    events: Object.values(state.events)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);