import axios from "axios";

export const fetchUser = (id) => {
    return axios.get(`/api/users/${id}`)
}

export const updateUser = (data) => {
    debugger
    return axios.patch(`/api/users/${data.id}`, data)
}