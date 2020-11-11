import axios from "axios";

export const fetchUsers = () => {
    return axios.get('/api/users/')
}

export const fetchUser = (id) => {
    return axios.get(`/api/users/${id}`)
}

export const updateUser = (data) => {
    return axios.patch(`/api/users/${data.id}`, data)
}

export const updatePicture = (data) => {
    debugger
    return axios.post(`/api/users/${data.get("id")}/add-profile-pictures`, {id: data.get("id"), name: data.get("name"), profilePicture: data.get("profilePicture")})
    // return $.ajax({method: 'post', url: `/api/users/${data.get("id")}/add-profile-pictures`, data: data})
}

// export const updatePicture = (data) => {
//     return axios.post(`/api/users/add-profile-pictures` , data)
// }

