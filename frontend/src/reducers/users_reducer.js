import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users.data 
        case RECEIVE_USER:
            return { [action.user.data.id]: action.user.data }
        default:
            return state;
    }
};

export default usersReducer;