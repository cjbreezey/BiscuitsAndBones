import axios from "axios";

export const fetchUsers = () => {
    // debugger
    return axios.get('/api/users/')
}

export const fetchUser = (id) => {
    debugger
    return axios.get(`/api/users/${id}`)
}

export const updateUser = (data) => {
    // debugger
    return axios.patch(`/api/users/${data.id}`, data)
}