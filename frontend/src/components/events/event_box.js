import {Link} from 'react-router-dom'
import React from 'react';
import EditEvent from './edit_event'
import { GoogleApiWrapper } from 'google-maps-react'

class EventBox extends React.Component {
  constructor(props) {
    super(props)

    // this.handleclick = this.handleclick.bind(this);
    this.dropdownClick = this.dropdownClick.bind(this);
  }

  dropdownClick(e) {
    let dropdown = document.getElementById(`dropdown-slide-${this.props.event._id}`)
    let event = document.getElementById(`event-item-${this.props.event._id}`)
    dropdown.classList.toggle('open')
    event.classList.toggle('focus')
    
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
      deletebutton = <button onClick={() => this.props.deleteEvent(this.props.event._id)}><i className="fa fa-trash"></i></button>
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
          <div onClick={this.dropdownClick} className="event-item" id={`event-item-${this.props.event._id}`}>
            <i className="fa fa-map-pin"></i>

            <div className="title-bar">
              <h3>{this.props.event.title}</h3>
              {/* <h3 onClick={this.dropdownClick} >
                {this.props.event.date.slice(0, 10)}
              </h3> */}
              {deletebutton}
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
              {/* <li>Where: {this.props.event.location}</li> */}
              <li className="index-event-description">
                {this.props.event.description}
              </li>
              <li className="attendees-num">
                {/* {this.props.event.date.slice(0, 10)}, {this.props.event.time} - */}
                Playdate Attendees: {this.props.event.attendees.length}
              </li>
              <li>
                <Link className="host-link" to={`/profile/${this.props.event.host_id}`}>
                  Host's Profile
                </Link>
              </li>
              <li>
                <Link className="event-details-button" to={`/events/${this.props.event._id}`}>
                  <button>See More Details</button>
                </Link>
              </li>
              <li>
                <EditEvent
                  event={this.props.event}
                  currentUser={this.props.currentUser}
                  updateEvent={this.props.updateEvent}
                />
              </li>
              <li>
                <i onClick={this.dropdownClick} className="fa fa-chevron-up"></i>
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