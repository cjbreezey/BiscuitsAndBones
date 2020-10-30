import React from "react";
import EventBox from "./event_box";
import "./events.css";

class EditEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.event.attendees.push(this.props.currentUser.id)
    this.props.updateEvent(this.props.event);
    alert(`You have joined "${this.props.event.title}"`);
  }

  render() {
    // debugger
    return (
      <div className="join-event-container">
        <form className="join-event-form" onSubmit={this.handleSubmit}>
            <input className="join-event-input" type="submit" value="Join Event" />
        </form>
        {/* <EventBox description={this.state.newEvent} /> */}
        {/* <EventMap /> */}
      </div>
    );
  }
}

export default EditEvent;
