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
      return Object.values(Object.assign({}, action.review.data));
    case RECEIVE_REVIEW:
      // newState = oldstate.filter(event => event._id === action.eventId)
      // return newState
      return { [action.review._id]: action.review };
    case REMOVE_REVIEW:
      newState = oldstate.filter((review) => review._id !== action.reviewId);
      return newState;
    default:
      return oldstate;
  }
};

export default ReviewsReducer;
