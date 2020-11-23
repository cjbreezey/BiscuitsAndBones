import React from "react";
import { withRouter, Link } from "react-router-dom";

class EventShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.event_id);
        this.props.fetchUsers();

    }

    // componentWillMount() {
    //     this.props.fetchEvent(event);
    // }

    // componentWillReceiveProps(newState) {
    //     this.setState({ events: newState.events });
    // }

    render() {
      debugger;
      if (!this.props.event) return null;
      if (!this.props.event.attendees) return null;
      if (!this.props.users) return null;
      
      // let filteredUsers = this.props.users.filter(user => this.props.event.attendees.includes(user._id))
      // this.props.users.map(user => {
      //     // if (this.props.event.attendees.includes(user.id)){
      //     //     attendeesname.push(user.name)
      //     return attendeesname.push(user.name)
      //     }
      // )

      let filteredUsers = Object.values(this.props.users).filter(user => this.props.event.attendees.includes(user._id)).map(user => user.name)
      
      let filtered = filteredUsers.map((username) => {
            return <li>{username}</li>;
      });
      return (
        <div className="events-index-container">
          <div className="index-left">
            <div className="create-event-box">
              <h2 className="event-index-header">All Events</h2>
              <Link className="create-event-link" to={"/new_event"}>
                Create an Event
              </Link>
            </div>
            <p>{this.props.event.description}</p>
            <ul>{filtered}</ul>
            <p>this is below description</p>
          </div>
        </div>
      );
    }
    }


export default withRouter(EventShow);