import {Link} from 'react-router-dom'
import React from 'react';
import EditEvent from './edit_event'
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react'

class EventBox extends React.Component {
  constructor(props) {
    super(props)

    // this.handleclick = this.handleclick.bind(this);
    this.dropdownClick = this.dropdownClick.bind(this);
  }

  dropdownClick(e) {
    let dropdown = document.getElementById(`dropdown-slide-${this.props.event._id}`)
    dropdown.classList.toggle('open')
    
    let dropdownItem = document.getElementById(`dropdown-items-${this.props.event._id}`)
    
    if (dropdownItem.style.display === "") {
      dropdownItem.style.borderbottom ="1px solid black"
      dropdownItem.style.display = "block";
    }
    else if (dropdownItem.style.display === "none") {
      dropdownItem.style.borderbottom ="1px solid black"
      dropdownItem.style.display = "block";
    } else {
      dropdownItem.style.borderbottom ="none"
      dropdownItem.style.display = "none";
    }

    dropdownItem.scrollIntoView({
      behavior: "smooth",
      block: "center"
    })

  }

  
  render() {
    if (!this.props.event) return null;
    let deletebutton;
    if (this.props.currentUser && this.props.currentUser.id === this.props.event.host_id) {
      deletebutton = <button onClick={() => this.props.deleteEvent(this.props.event._id)}> X </button>
    } else {
      deletebutton = null
    }
    if (!this.props.event.date) return null

    let day = new Date();
    let today = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1);
    let inputDate = new Date(this.props.event.date)
    if (today >= inputDate) {
      return null
    } else {
      return (
        <div className="event-item-container">
          <div className="event-item">
            <div className="title-bar">
              <h3 onClick={this.dropdownClick}>{this.props.event.title}</h3>
              <h3 onClick={this.dropdownClick} >
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
            className="event-dropdown"
          >
            <ul
              id={`dropdown-items-${this.props.event._id}`}
              className="event-dropdown-items"
            >
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
      );
    }
  }
}

// export default EventBox;
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_SECRET_KEY)
})(EventBox)