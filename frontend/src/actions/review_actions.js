import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
};

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
};

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReviews = () => dispatch => {
  return ReviewApiUtil.getReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
    .catch(err => console.log(err))
};


export const createReview = data => dispatch => {
  return ReviewApiUtil.createReview(data)
    .then(payload => dispatch(receiveReview(payload)))
    .catch(err => console.log(err))
};

export const deleteReview = reviewId => dispatch => {
  return ReviewApiUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
    .catch(err => console.log(err)) 
}

