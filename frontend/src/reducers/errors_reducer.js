import { combineReducers } from 'redux';
import userErrorsReducer from './user_errors_reducer'
import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  user: userErrorsReducer
});