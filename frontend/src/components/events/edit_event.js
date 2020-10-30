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
  }

  render() {
    let button;
    {this.props.event.attendees.map((attendee) => {
      if (attendee === this.props.currentUser.id){
        button =  <form className="join-event-form" onSubmit={this.handleSubmit}>
                      <input className="join-event-input" type="submit" value="Leave Event" />
                    </form>
      } else {
        button = <form className="join-event-form" onSubmit={this.handleSubmit}>
                      <input className="join-event-input" type="submit" value="Join Event" />
                  </form>
      }
    })}

    return (
      <div className="join-event-container">
        {button}
        {/* <EventBox description={this.state.newEvent} /> */}
        {/* <EventMap /> */}
      </div>
    );
  }
}

export default EditEvent;
