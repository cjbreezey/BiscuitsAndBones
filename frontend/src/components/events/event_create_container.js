import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventCreate from './event_create';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newEvent: state.events.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: data => dispatch(createEvent(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCreate);