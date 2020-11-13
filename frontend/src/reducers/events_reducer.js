import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
  
  const EventsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    let newState = Object.assign({}, oldstate);
    switch(action.type) {
      case RECEIVE_EVENTS:
        return Object.values(Object.assign({}, action.events.data))
      case RECEIVE_EVENT:
        // newState = oldstate.filter(event => event._id === action.eventId)
        // return newState
        return { [action.event._id]: action.event }
      case REMOVE_EVENT:
        newState = oldstate.filter(event => event._id !== action.eventId)
        return newState
      default:
        return oldstate;
    }
  };
  
  export default EventsReducer;