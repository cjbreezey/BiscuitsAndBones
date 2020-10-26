import React from 'react';
import { withRouter } from 'react-router-dom';
import EventBox from './event_box';
import { Link } from 'react-router-dom';

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
    if (this.state.events.length === 0) {
      return (
      <div>
          <h1>There are no Events</h1>
          <Link to={'/new_event'}>Create an Event</Link>
      </div>)

    } else {
      return (
        <div>
          <Link to={'/new_event'}>Create an Event</Link>
          <h2>All Events</h2>
          {this.state.events.map(event => (
            <EventBox key={event._id} description={event.description} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Event);