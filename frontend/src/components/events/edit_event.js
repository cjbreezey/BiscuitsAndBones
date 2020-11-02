import React from "react";
import EventBox from "./event_box";
import "./events.css";

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
    this.props.updateEvent(this.props.event);
    alert(`You have joined "${this.props.event.title}"`)
  }

  handleSubmitLeave(e) {
    e.preventDefault();
    this.props.event.attendees = this.props.event.attendees.filter(attendee => attendee !== this.props.currentUser.id)
    this.props.updateEvent(this.props.event);
    alert(`You have left "${this.props.event.title}"`)
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({updatedEvent: nextProps.updatedEvent.attendees});
  // }

  render() {
    let button;

    if (this.props.event.attendees.includes(this.props.currentUser.id)) {
      button =  <form className="join-event-form" onSubmit={this.handleSubmitLeave}>
                  <input className="join-event-input" type="submit" value="Leave Event" />
                </form>
    } else {
      button = <form className="join-event-form" onSubmit={this.handleSubmitJoin}>
                       <input className="join-event-input" type="submit" value="Join Event" />
                   </form>
    }
  

    // {this.props.event.attendees.includes((this.props.currentUser.id)) => {
    //     button =  <form className="join-event-form" onSubmit={this.handleSubmit}>
    //                   <input className="join-event-input" type="submit" value="Leave Event" />
    //                 </form>
    //   } else {
    //     button = <form className="join-event-form" onSubmit={this.handleSubmit}>
    //                   <input className="join-event-input" type="submit" value="Join Event" />
    //               </form>
    //   }
    // })}

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
