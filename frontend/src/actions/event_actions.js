import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

export const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});

export const receiveUserEvents = events => ({
    type: RECEIVE_USER_EVENTS,
    events
});

export const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
})

export const fetchEvents = () => dispatch => {
  return EventApiUtil.getEvents()
    .then(events => dispatch(receiveEvents(events)))
    .catch(err => console.log(err))
};

export const fetchUserEvents = id => dispatch => {
  return EventApiUtil.getUserEvents(id)
    .then(events => dispatch(receiveUserEvents(events)))
    .catch(err => console.log(err))
};

export const createEvent = data => dispatch => {
  return EventApiUtil.writeEvent(data)
    .then(event => dispatch(receiveEvent(event)))
    .catch(err => console.log(err))
};

export const deleteEvent = eventId => dispatch => {
  return EventApiUtil.deleteEvent(eventId)
    .then(eventId => dispatch(removeEvent(eventId)))
    .catch(err => console.log(err)) 
}

export const updateEvent = event => dispatch => {
  return EventApiUtil.updateEvent(event)
    .then(event => dispatch(receiveEvent(event)))
    .catch(err => console.log(err)) 
}

export const joinEvent = eventId => dispatch => {
  return EventApiUtil.joinEvent(eventId)
    .then(res => dispatch(receiveEvent(res.data))) 
    .catch(err => console.log(err))
}
