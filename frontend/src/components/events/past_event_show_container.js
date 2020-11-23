import { connect } from 'react-redux';
import { fetchEvent, updateEvent, deleteEvent} from '../../actions/event_actions';
import { fetchUsers } from '../../actions/users_actions';
import PastEventShow from './past_event_show';
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    // product: state.entities.products[ownProps.match.params.productId],
    // let event = ownProps.match.params.event_id;
    let currentUser = state.session.user
    
    return {
        currentUser: state.session.user,
        event: state.events[ownProps.match.params.event_id],
        users: state.users,
        currentUser 
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
      deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
      updateEvent: (event) => dispatch(updateEvent(event)),
      fetchUsers: () => dispatch(fetchUsers()),
      openModal: (modal) => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PastEventShow)