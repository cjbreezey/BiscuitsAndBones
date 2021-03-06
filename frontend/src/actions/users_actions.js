import * as UsersAPIUtil from '../util/users_api_util'

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS"

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = user => {
    console.log(user)
    return {
        type: RECEIVE_USER,
        user
    }
}

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS
})

export const fetchUsers = () => dispatch => {
    return UsersAPIUtil.fetchUsers().then(
        (payload) => (dispatch(receiveUsers(payload))),
        (err) => dispatch(receiveUserErrors(err.response.data)))
}

export const fetchUser = (id) => dispatch => {
    return UsersAPIUtil.fetchUser(id).then(
        (user) => (dispatch(receiveUser(user))),
        (err) => dispatch(receiveUserErrors(err.response.data)))
}

export const updatePicture = (user) => dispatch => { 
    return UsersAPIUtil.updatePicture(user).then((payload) => {
            dispatch(receiveUser(payload))
    },
        (err) => dispatch(receiveUserErrors(err.response.data)))
}

export const updateUser = (user) => dispatch => { 
    return UsersAPIUtil.updateUser(user).then((payload) => {
            dispatch(receiveUser(payload))
    },
        (err) => dispatch(receiveUserErrors(err.response.data)))
}

