import axios from 'axios';

export const getPlaydates = () => {
  return axios.get('/api/playdates')
};

export const getUserPlaydates = id => {
  return axios.get(`/api/playdates/user/${id}`)
};

export const requestPlaydate = data => {
  return axios.post('/api/playdates/', data)
}

