import { STATES } from 'mongoose';
import { RECEIVE_EVENTS, RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
  
  const EventsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch(action.type) {
      case RECEIVE_EVENTS:
        // debugger
  
        return Object.values(Object.assign({}, action.events.data))
      // case RECEIVE_USER_EVENTS:
      //   // debugger
      //   // let newState = Object.assign({}, oldstate);
      //   // newState[user] = action.events.data;
      //   debugger
      //   return newState;
      case RECEIVE_EVENT:
        debugger
        return { [action.event._id]: action.event }
      case REMOVE_EVENT:
        debugger
        let newState = Object.assign({}, oldstate);
        newState = oldstate.filter(event => event._id !== action.eventId)
        //     delete newState[action.eventId];
        //     debugger
        //     return newState;
        return newState
      default:
        return oldstate;
    }
  };
  
  export default EventsReducer;