import React from "react";
import { withRouter, Link } from "react-router-dom";
import EditEvent from "./edit_event";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import './events.css'

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    
    this.dropdownClick = this.dropdownClick.bind(this);
}

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.event_id);
    this.props.fetchUsers();
  }

  dropdownClick(e) {
    let dropdown = document.getElementById(
      `dropdown-slide-${this.props.event._id}`
    );
    dropdown.classList.toggle("open");

    let dropdownItem = document.getElementById(
      `dropdown-items-${this.props.event._id}`
    );

    if (dropdownItem.style.display === "") {
      dropdownItem.style.borderbottom = "1px solid black";
      dropdownItem.style.display = "block";
    } else if (dropdownItem.style.display === "none") {
      dropdownItem.style.borderbottom = "1px solid black";
      dropdownItem.style.display = "block";
    } else {
      dropdownItem.style.borderbottom = "none";
      dropdownItem.style.display = "none";
    }

    dropdownItem.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
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
    let attendeesName = [];

    let deletebutton;
    if (
      this.props.currentUser &&
      this.props.currentUser.id === this.props.event.host_id
    ) {
      deletebutton = (
        <button onClick={() => this.props.deleteEvent(this.props.event._id)}>
          {" "}
          X{" "}
        </button>
      );
    } else {
      deletebutton = null;
    }
    // let filteredUsers = this.props.users.filter(user => this.props.event.attendees.includes(user._id))
    // this.props.users.map(user => {
    //     // if (this.props.event.attendees.includes(user.id)){
    //     //     attendeesname.push(user.name)
    //     return attendeesname.push(user.name)
    //     }
    // )

    let filteredUsers = Object.values(this.props.users)
      .filter((user) => this.props.event.attendees.includes(user._id))
      .map((user) => user.name);

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
        <div className="event-item-container">
          <div className="event-item">
            <div className="title-bar">
              <h3 onClick={this.dropdownClick}>{this.props.event.title}</h3>
              <h3 onClick={this.dropdownClick}>
                {this.props.event.date.slice(0, 10)}
              </h3>
              {deletebutton}
              <Link to={`/events/${this.props.event._id}`}>
                <button>See More Details</button>
              </Link>
            </div>
          </div>
          <div
            id={`dropdown-slide-${this.props.event._id}`}
            className="event-dropdown open"
          >
            <ul
              id={`dropdown-items-${this.props.event._id}`}
              className="event-dropdown-items"
              style={{display: "block"}}
            >
              {/* <button onClick={() => this.props.joinEvent(this.props.event._id)}></button> */}
              <li>
                <Map
                  className="google-map"
                  style={{ width: "auto", height: "300px" }}
                  google={this.props.google}
                  initialCenter={{
                    lat: this.props.event.lat,
                    lng: this.props.event.lng,
                  }}
                  center={{
                    lat: this.props.event.lat,
                    lng: this.props.event.lng,
                  }}
                >
                  <Marker
                    position={{
                      lat: this.props.event.lat,
                      lng: this.props.event.lng,
                    }}
                  />
                </Map>
              </li>
              <li>{this.props.event.location}</li>
              <li>
                {this.props.event.date.slice(0, 10)}, {this.props.event.time} -
                Playdate Attendees: {this.props.event.attendees.length}
              </li>
              <li className="index-event-description">
                {this.props.event.description}
              </li>
              <li>
                <Link to={`/profile/${this.props.event.host_id}`}>
                  Host's Profile
                </Link>
              </li>
              <li>
                <EditEvent
                  event={this.props.event}
                  currentUser={this.props.currentUser}
                  updateEvent={this.props.updateEvent}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


// export default withRouter(EventShow);
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_SECRET_KEY,
})(EventShow);