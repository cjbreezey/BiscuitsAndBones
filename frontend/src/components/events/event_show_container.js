import { connect } from 'react-redux';
import { fetchEvent, updateEvent, deleteEvent} from '../../actions/event_actions';
import { fetchUsers } from '../../actions/users_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
    // product: state.entities.products[ownProps.match.params.productId],
    // let event = ownProps.match.params.event_id;
    // let currentUser = state.session.id 
    
    return {
        event: state.events[ownProps.match.params.event_id],
        users: state.users
        // currentUser 
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
      deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
      updateEvent: (event) => dispatch(updateEvent(event)),
      fetchUsers: () => dispatch(fetchUsers()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)