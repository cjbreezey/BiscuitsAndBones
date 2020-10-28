import React from 'react';

class EventBox extends React.Component {
  constructor(props){
    super(props)

    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(e){
    this.props.receiveEvent(this.props.event)
    this.props.deleteEvent(this.props.event._id)
  }

  render() {
    // debugger
    if (!this.props.event) return null;
    return (
        <div className="event-item">
           <h3>{this.props.event.description}</h3>
            <button onClick={() => this.props.deleteEvent(this.props.event._id)}> Delete Event</button>
        </div>
    );
  }
}

export default EventBox;