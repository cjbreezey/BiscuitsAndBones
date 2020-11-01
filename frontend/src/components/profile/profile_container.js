import { connect } from 'react-redux';
import { fetchEvents, deleteEvent } from '../../actions/event_actions';
import { fetchUser } from '../../actions/users_actions';
import Profile from './profile';
import { fetchReviews, deleteReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const profileUser = ownProps.match.params.user_id
  const profileInfo = state.users[profileUser] 
  const currentUser = state.session.user
  const events = Object.values(state.events).filter(event => event.host_id === ownProps.match.params.user_id)
  return {
    events,
    currentUser,
    profileUser,
    profileInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: (id) => dispatch(deleteReview(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);