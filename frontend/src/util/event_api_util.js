import axios from 'axios';

export const getEvents = () => {
  return axios.get('/api/events')
};

export const getUserEvents = id => {
  return axios.get(`/api/events/user/${id}`)
};

export const writeEvent = data => {
  return axios.post('/api/events/', data)
}

export const deleteEvent = (eventId) => {
  return axios.delete(`/api/events/${eventId}`)
};