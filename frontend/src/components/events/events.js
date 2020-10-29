import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import EventBox from './event_box';
import EventCreate from './event_create'
import './events.css'

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.props.fetchEvents();
 
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  componentWillReceiveProps(newState) {
    this.setState({ events: newState.events });
  }

  render() {

    if (this.state.events.length === 0) {
      return (
      <div className="events-index-container">
          <h1>There are no Events</h1>
          <Link to={'/new_event'}>Create an Event</Link>
      </div>)

    } else {
      return (
        <div className="events-index-container">
          <div className="index-left">
            <h2 className="event-index-header">All Events</h2>
            <Link className="create-event-link" to={'/new_event'}>Create an Event</Link>
          </div>
          <div className="index-right">
            <ul className="events-list">
              {/* <EventCreate /> */}
              {this.state.events.map((event) => {
                return <EventBox event={event} key={event._id} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} joinEvent={this.props.joinEvent} updateEvent={this.props.updateEvent}/>
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Events);