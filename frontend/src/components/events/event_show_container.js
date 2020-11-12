import { connect } from 'react-redux';
import { fetchEvent, updateEvent, deleteEvent } from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
    debugger
    // product: state.entities.products[ownProps.match.params.productId],
    // let event = ownProps.match.params.event_id;
    // let currentUser = state.session.id 

    return {
        event: state.events[ownProps.match.params.event_id]
        // currentUser 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
        updateEvent: (event) => dispatch(updateEvent(event)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)