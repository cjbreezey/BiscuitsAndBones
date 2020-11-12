import axios from "axios";
// import $ from 'jquery';

export const fetchUsers = () => {
    return axios.get('/api/users/')
}

export const fetchUser = (id) => {
    return axios.get(`/api/users/${id}`)
}

export const updateUser = (data) => {
    return axios.patch(`/api/users/${data.id}`, data)
}

export const updatePicture = (formData) => {
    debugger
    // return axios.post(`/api/users/${formData.get("id")}/add-profile-pictures`, {id: formData.get("id"), name: formData.get("name"), profilePicture: formData.get("profilePicture")})
    // return axios.post(`/api/users/${formData.get("id")}/add-profile-pictures`, {banana: formData}, {headers: {'Content-Type': 'multipart/form-data'}, })
        return axios.post(`/api/users/${formData.get("id")}/add-profile-pictures`, formData )
    // return fetch (`/api/users/${formData.get("id")}/add-profile-pictures`, { method: 'post', body: formData})
}

// export const updatePicture = (data) => {
//     return axios.post(`/api/users/add-profile-pictures` , data)
// }

