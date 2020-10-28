import { STATES } from 'mongoose';
import { RECEIVE_EVENTS, RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
  
  const EventsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch(action.type) {
      case RECEIVE_EVENTS:
        return Object.values(Object.assign({}, action.events.data))
      case RECEIVE_EVENT:
        return { [action.event._id]: action.event }
      case REMOVE_EVENT:
        let newState = Object.assign({}, oldstate);
        newState = oldstate.filter(event => event._id !== action.eventId)
        return newState
      default:
        return oldstate;
    }
  };
  
  export default EventsReducer;