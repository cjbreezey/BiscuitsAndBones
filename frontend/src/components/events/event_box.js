import React from 'react';

class EventBox extends React.Component {
  constructor(props){
    super(props)

    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(e){
    // this.props.receiveEvent(this.props.event)
    this.props.deleteEvent(this.props.event._id)
  }

  render() {
    if (!this.props.event) return null;

    let deletebutton;
    if (this.props.currentUser && this.props.currentUser.id === this.props.event.host_id){
      deletebutton = <button onClick={() => this.props.deleteEvent(this.props.event._id)}> Delete Event</button>
    } else {
      deletebutton = null
    }



    return (
        <div className="event-item">
           <h3>{this.props.event.description}</h3>
           <div>{deletebutton}</div>
        </div>
    );
  }
}

export default EventBox;