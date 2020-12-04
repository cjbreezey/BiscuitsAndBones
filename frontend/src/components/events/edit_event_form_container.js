import { connect } from 'react-redux';
import { updateEvent, deleteEvent, fetchEvent } from '../../actions/event_actions';
import EditEventForm from './edit_event_form'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => { 
    return {
        currentUser: state.session.user,
        event: Object.values(state.events).filter(event => event._id === ownProps.match.params.event_id)[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateEvent: event => dispatch(updateEvent(event)),
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditEventForm));