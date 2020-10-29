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

export const deleteEvent = (id) => {
  return axios.delete(`/api/events/${id}`)
};

export const updateEvent = data => { 
  return axios.patch(`/api/event/${data._id}`, data)
}

export const joinEvent = eventId => {
    return axios.post(`/api/events/${eventId}`)
}