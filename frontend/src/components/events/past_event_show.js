import React from "react";
import { Link } from "react-router-dom";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import ReviewsIndex from '../reviews/reviews_index';

class PastEventShow extends React.Component {
  constructor(props) {
    super(props);
    this.renderHost = this.renderHost.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.event_id);
    this.props.fetchUsers();
  }


  compon

  renderHost() {
    let host = Object.values(this.props.users).filter(
      (user) => this.props.event.host_id === user._id
    );

    if (host.length === 0) {
      return null;
    } else {
      return host[0].profilePicture;
    }
  }

  render() {
    if (!this.props.event) return null;
    if (!this.props.event.attendees) return null;
    if (!this.props.users) return null;

    let filteredUsers = Object.values(this.props.users)
      .filter((user) => this.props.event.attendees.includes(user._id))
      .map((user) => user.name);

    let filtered = filteredUsers.map((username) => {
      return (
        <li>
          <i class="fa fa-paw"></i>
          {username}
          <i class="fa fa-paw"></i>
        </li>
      );
    });

    return (
      <div className="events-index-container">
        <div className="index-left">
          <div className="create-event-box">
            <h2 className="event-index-header">{this.props.event.title}</h2>
            <Link className="create-event-link" to={"/new_event"}>
              Setup a Playdate!
            </Link>
          </div>
          <div className="social-links">
            <div>
              <p className="sidebar-name">Peter Min</p>
              <div className="our-links">
                <a href="https://github.com/pmin825" target="_blank">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/peter-min-02a62a13a/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="https://angel.co/u/peter-min-1" target="_blank">
                  <i className="fa fa-angellist" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div>
              <p className="sidebar-name">Jonathan Siu</p>
              <div className="our-links">
                <a href="https://github.com/jonsiu826" target="_blank">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jonathansiu826/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="https://angel.co/jonathan-siu-2" target="_blank">
                  <i className="fa fa-angellist" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div>
              <p className="sidebar-name">Chris Lee</p>
              <div className="our-links">
                <a
                  href="https://github.com/cjbreezey"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/christopher-j-lee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a
                  href="https://angel.co/u/christopher-lee-93"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-angellist" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div>
              <p className="sidebar-name">Taylor Lee</p>
              <div className="our-links">
                <a
                  href="https://github.com/xtaylor117"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/taylorlee117/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a
                  href="https://angel.co/u/taylor-lee-18"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-angellist" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="show-index-right">
          <div className="show-background">
            <li className="event-show-location">{this.props.event.location}</li>
              <div className="bottom-show-container">
                <div className="host-and-pic">
                  <li><img className="host-picture" src={this.renderHost()} /></li>
                  <li>
                    <Link className="show-host-link" to={`/profile/${this.props.event.host_id}`}>
                      Host's Profile
                    </Link>
                  </li>
                </div>
                <li className="event-show-description"><i className="fa fa-caret-left"></i>{this.props.event.description}</li>
              </div>
          </div>
          <ul className="event-show-elements">
            <li>
              <Map
                className="google-map"
                style={{
                  width: "50vw",
                  height: "300px",
                  position: "relative",
                  top: "50px",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
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
            {/* <li className="event-show-location">{this.props.event.location}</li>
            <li>
              <img className="host-picture" src={this.renderHost()} />
            </li>
            <li>
              <Link
                className="show-host-link"
                to={`/profile/${this.props.event.host_id}`}
              >
                Host's Profile
              </Link>
            </li>
            <li className="event-show-description">
              <i class="fa fa-caret-left"></i>
              {this.props.event.description}
            </li> */}
            <ReviewsIndex event={this.props.event} reviews={this.props.reviews} fetchReviews={this.props.fetchReviews} currentUser={this.props.currentUser}  deleteReview={this.props.deleteReview}/>
            <p id="event-attendees">Event Attendees</p>
            <ul className="event-show-attendees">
              {filtered}
              <li>
                <button className="create-event-link" onClick={() => this.props.openModal("review")}>
                  Review Event
                </button>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_SECRET_KEY,
})(PastEventShow);
