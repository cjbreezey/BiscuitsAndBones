import React from "react";
import "./events.css";
import {withRouter} from 'react-router-dom';

class EditEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.handleSubmitJoin = this.handleSubmitJoin.bind(this);
    this.handleSubmitLeave = this.handleSubmitLeave.bind(this);

  }

  

  handleSubmitJoin(e) {
    e.preventDefault();
    this.props.event.attendees.push(this.props.currentUser.id)
    this.props.updateEvent(this.props.event,this.routeToEvent());
  }

  handleSubmitLeave(e) {
    e.preventDefault();
    this.props.event.attendees = this.props.event.attendees.filter(attendee => attendee !== this.props.currentUser.id)
    this.props.updateEvent(this.props.event, this.routeToEvent());
    
  }

  routeToEvent() {
    this.props.history.push(`/events/${this.props.event._id}`);
  }

  routeToIndex() {
    this.props.history.push('/events');
  }

  routeToEditEvent(){
    this.props.history.push(`/events/${this.props.event._id}/edit`);
  }

  render() {
    let button; 
    let deleteButton;
    let editButton;

    if (this.props.currentUser && this.props.currentUser.id === this.props.event.host_id) {
      button = <button className="edit-event" onClick={() => this.routeToEditEvent()}>Edit Event</button>
      deleteButton = <button className="delete-event" onClick={() => this.props.deleteEvent(this.props.event._id).then(() => this.routeToIndex())}>Cancel Event</button>
    } else if (this.props.event.attendees.includes(this.props.currentUser.id)) {
      button =  <form className="join-event-form" onSubmit={this.handleSubmitLeave}>
                  <input className="join-event-input" type="submit" value="Leave Playdate" />
                </form>
    } else {
      button = <form className="join-event-form" onSubmit={this.handleSubmitJoin}>
                       <input className="join-event-input" type="submit" value="Join Playdate!" />
                   </form>
    }

    return (
      <div className="join-event-container">
        {button}
        {deleteButton}
      </div>
    );
  }
}

export default withRouter(EditEvent);
