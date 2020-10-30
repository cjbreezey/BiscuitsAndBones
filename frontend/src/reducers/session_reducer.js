import { RECEIVE_CURRENT_USER, 
         RECEIVE_USER_LOGOUT, 
         RECEIVE_USER_SIGN_IN } from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/users_actions'
const initialState = {
  isAuthenticated: false,
  user: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      }
    // case RECEIVE_USER:
    //   // debugger
    //   return {
    //     isAuthenticated: true,
    //     user: action.user
    //   }
      // return Object.assign({}, state, { [action.user.id]: action.user })
    default:
      return state;
  }
}