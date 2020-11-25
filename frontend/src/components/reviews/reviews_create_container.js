import { connect } from 'react-redux';
import { fetchEvents, deleteEvent} from '../../actions/event_actions';
import { fetchUser } from '../../actions/users_actions';
import ReviewCreate from './reviews_create'
import { fetchReviews, deleteReview, createReview} from '../../actions/review_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.user
  const event = Object.values(state.events)
  const reviews = Object.values(state.reviews)
  return {
    event,
    currentUser,
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