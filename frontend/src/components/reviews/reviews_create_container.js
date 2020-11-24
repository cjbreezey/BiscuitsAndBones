import { connect } from 'react-redux';
import { fetchEvents, fetchEvent, deleteEvent} from '../../actions/event_actions';
import { fetchUser } from '../../actions/users_actions';
import ReviewCreate from './reviews_create'
import { fetchReviews, deleteReview, createReview} from '../../actions/review_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // const eventId = ownProps.match.params.event_id
  // const profileInfo = state.users[profileUser] 
  const currentUser = state.session.user
  const event = Object.values(state.events)
  // const events = Object.values(state.events).filter(event => event.host_id === ownProps.match.params.user_id)
  const reviews = Object.values(state.reviews)
  return {
    event,
    currentUser,
    // profileUser,
    // profileInfo,
    reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: (eventId) => dispatch(fetchEvents(eventId)),
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: (id) => dispatch(deleteReview(id)),
    createReview: (id) => dispatch(createReview(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewCreate));

{/* <ReviewCreate currentUser={this.props.currentUser} event={this.props.event} createReview={this.props.createReview}/> */}
