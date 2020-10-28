import React from 'react';
import { withRouter } from 'react-router-dom';
import EventBox from './event_box';
import { Link } from 'react-router-dom';
import EventMap from '../map/event_map'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import './events.css'

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }

    componentDidMount() {
    // debugger
    this.props.fetchEvents();
  }

  componentWillMount() {
    // debugger
    this.props.fetchEvents();
  }

  componentWillReceiveProps(newState) {
    // debugger
    this.setState({ events: newState.events });
  }

  render() {
    const WrappedMap = withScriptjs(withGoogleMap(EventMap));

    if (this.state.events.length === 0) {
      return (
      <div className="events-index-container">
          <h1>There are no Events</h1>
          <Link to={'/new_event'}>Create an Event</Link>
          {/* <EventMap /> */}
      </div>)

    } else {
      return (
        <div className="events-index-container">
          <h2 className="event-index-header">All Events</h2>
          <ul className="events-list">
            {this.state.events.map((event) => {
              return <EventBox event={event} key={event._id} receiveEvent={this.props.receiveEvent} deleteEvent={this.props.deleteEvent}/>
            })}
          </ul>
          <Link className="create-event-link" to={'/new_event'}>Create an Event</Link>
        </div>
      );
    }
  }
}

export default withRouter(Events);