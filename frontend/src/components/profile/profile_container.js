import { connect } from 'react-redux';
import { fetchUserEvents } from '../../actions/event_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    events: Object.values(state.events.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserEvents: id => dispatch(fetchUserEvents(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);