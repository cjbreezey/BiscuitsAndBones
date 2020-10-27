import React from 'react';
import { withRouter } from 'react-router-dom';
import EventBox from './event_box';
import { Link } from 'react-router-dom';
import EventMap from '../map/event_map'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import './events.css'

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  componentWillReceiveProps(newState) {
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
          <Link to={'/new_event'}>Create an Event</Link>
          <h2>All Events</h2>
          {this.state.events.map(event => (
            <EventBox key={event._id} description={event.description} />
            ))}
            {/* <EventMap /> */}
        </div>
      );
    }
  }
}

export default withRouter(Event);