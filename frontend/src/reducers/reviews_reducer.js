import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from "../actions/review_actions"

const ReviewsReducer = (oldstate = {}, action) => {
  Object.freeze(oldstate);
  let newState = Object.assign({}, oldstate);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      debugger
      return Object.values(Object.assign({}, action.reviews.data));
    case RECEIVE_REVIEW:
      // newState = oldstate.filter(event => event._id === action.eventId)
      debugger
      return { [action.review.data._id]: action.review.data };
    case REMOVE_REVIEW:
      newState = oldstate.filter((review) => review._id !== action.reviewId);
      return newState;
    default:
      return oldstate;
  }
};

export default ReviewsReducer;
