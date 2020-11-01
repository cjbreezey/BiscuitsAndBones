import axios from 'axios';

export const getReviews = () => {
  // debugger
  return axios.get('/api/reviews')
};

export const createReview = data => {
  // debugger
  return axios.post('/api/reviews', data)
};

export const deleteReview = id => {
  return axios.delete(`/api/reviews/${id}`)
};
// export const updateReview = review => {
//   return axios.patch(`/api/reviews/${review._id}`, review)
// };
