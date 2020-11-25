import axios from 'axios';

export const getReviews = () => {
  return axios.get('/api/reviews')
};

export const createReview = data => {
  return axios.post('/api/reviews', data)
};

export const deleteReview = id => {
  return axios.delete(`/api/reviews/${id}`)
};

