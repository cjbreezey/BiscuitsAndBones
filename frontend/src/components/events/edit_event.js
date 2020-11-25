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

  render() {
    let button;

    if (this.props.event.attendees.includes(this.props.currentUser.id)) {
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
      </div>
    );
  }
}

export default withRouter(EditEvent);
