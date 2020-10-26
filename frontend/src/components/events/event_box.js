import React from 'react';

class EventBox extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.description}</h3>
        </div>
    );
  }
}

export default EventBox;