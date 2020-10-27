import React from 'react';

class EventBox extends React.Component {
  render() {
    return (
        <div className="event-item">
            <h3>{this.props.description}</h3>
        </div>
    );
  }
}

export default EventBox;