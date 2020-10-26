import { getEvents, getUserEvents, writeEvent } from '../util/event_api_util';

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

export const fetchEvents = () => dispatch => (
  getEvents()
    .then(events => dispatch(receiveEvents(events)))
    .catch(err => console.log(err))
);

export const fetchUserEvents = id => dispatch => (
  getUserEvents(id)
    .then(events => dispatch(receiveUserEvents(events)))
    .catch(err => console.log(err))
);

export const createEvent = data => dispatch => (
  writeEvent(data)
    .then(event => dispatch(receiveEvent(event)))
    .catch(err => console.log(err))
);

export const deleteEvent = data => dispatch => (
    deleteEvent(data)
        .then(event => dispatch(removeEvent(event)))
        .catch(err => console.log(err)) 
);