import React from "react";
import { withRouter, Link } from "react-router-dom";
import EventBox from './event_box'
import EditEvent from './edit_event'
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react'

class EventShow extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //   hostPicture: ""
        // }

      this.renderHost = this.renderHost.bind(this)
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

    renderHost() {
      let host = Object.values(this.props.users).filter(user => this.props.event.host_id === user._id)

      if (host.length === 0) {
        return null
      } else {
        return host[0].profilePicture
      }
    }

    render() {
      if (!this.props.event) return null;
      if (!this.props.event.attendees) return null;
      if (!this.props.users) return null;

      let host = Object.values(this.props.users).filter(user => this.props.event.host_id === user._id)
      let attendeesName = [];
      let filteredUsers = Object.values(this.props.users).filter(user => this.props.event.attendees.includes(user._id)).map(user => user.name)

      let filtered = filteredUsers.map((username) => {
            return <li><i class="fa fa-paw"></i>{username}<i class="fa fa-paw"></i></li>;
      });

      const MONTHS = ['FILLER', 'JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
       

      let month = this.props.event.date.slice(5, 7)
      let day = this.props.event.date.slice(8, 10)

      return (
        <div className="events-index-container">
          <div className="index-left">
            <div className="create-event-box">
              <h2 className="event-index-header">{this.props.event.title}</h2>
              <Link className="create-event-link" to={"/new_event"}>
                Create an Event
              </Link>
            </div>
            <div className="social-links">
                <div>
                <p className="sidebar-name">Peter Min</p>
                <div className="our-links">
                  <a href="https://github.com/pmin825" target="_blank"><i className="fa fa-github" aria-hidden="true"/></a>
                  <a href="https://www.linkedin.com/in/peter-min-02a62a13a/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                  <a href="https://angel.co/u/peter-min-1" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a>
                </div>
              </div>
              <div>
                <p className="sidebar-name">Jonathan Siu</p>
                <div className="our-links">
                  <a href="https://github.com/jonsiu826" target="_blank"><i className="fa fa-github" aria-hidden="true"/></a>
                  <a href="https://www.linkedin.com/in/jonathansiu826/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                   <a href="https://angel.co/jonathan-siu-2" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a>
                </div>
              </div>
              <div>
                <p className="sidebar-name">Chris Lee</p>
                <div className="our-links">
                  <a href="https://github.com/cjbreezey" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"/></a>
                  <a href="https://www.linkedin.com/in/christopher-j-lee/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                  <a href="https://angel.co/u/christopher-lee-93" target="_blank" rel="noreferrer"><i className="fa fa-angellist" aria-hidden="true"></i></a>
                </div>
              </div>
              <div>
                <p className="sidebar-name">Taylor Lee</p>
                <div className="our-links">
                  <a href="https://github.com/xtaylor117" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"/></a>
                  <a href="https://www.linkedin.com/in/taylorlee117/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                  <a href="https://angel.co/u/taylor-lee-18" target="_blank" rel="noreferrer"><i className="fa fa-angellist" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="show-index-right">
            <div className="show-background"/>
            <ul className="event-show-elements">
              <li><Map className="google-map" style={{ width: '50vw', height: '300px', position: 'relative', top: '50px', border: '1px solid black', borderRadius: '10px'}} google={this.props.google}
                initialCenter={{
                  lat: this.props.event.lat,
                  lng: this.props.event.lng
                }}
                center={{
                  lat: this.props.event.lat,
                  lng: this.props.event.lng
                }}
              >
                <Marker
                  position={{
                    lat: this.props.event.lat,
                    lng: this.props.event.lng
                  }}
                />
              </Map></li>
              <li className="event-show-location">{this.props.event.location}</li>
              <li><img className="host-picture" src={this.renderHost()} /></li>
              <li className="event-show-description"><i class="fa fa-caret-left"></i>{this.props.event.description}</li>
              <li className="calendar-date">
                <div>Save the date!</div>
                <div className="month">{MONTHS[month]}</div>
                <div className="day">{day}</div>
              </li>
              <p id="event-attendees">Event Attendees</p>
              <ul className="event-show-attendees">
                {filtered}
                <li>
                <EditEvent
                  event={this.props.event}
                  currentUser={this.props.currentUser}
                  updateEvent={this.props.updateEvent}
                />
                </li>
              </ul>
            </ul>
          </div>
        </div>
      );
    }
    }


// export default withRouter(EventShow);

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_SECRET_KEY)
})(EventShow)