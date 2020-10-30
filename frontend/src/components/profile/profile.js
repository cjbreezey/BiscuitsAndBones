import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from '../profile/profile_item';
import './profile.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            name: this.props.currentUser.name,
            bio: "bio goes here",
            picture: "",
            pet_name: "pet name goes here"
        }
    }
    
    componentWillMount() {
        // console.log(this.props.currentUser.id)
        this.props.fetchEvents();
    }

    componentWillReceiveProps(newState) {
        this.setState({ events: newState.events });
    }
    
    editLink() {
      if (this.props.currentUser) {
        return (
          <Link to={`/users/${this.props.currentUser.id}/edit`}>Edit</Link>
        )
      }
    }
    
    render() {
        if (this.state.events.length === 0) {
          return (<div className="profile-container">This user has no events</div>)
        } else {
          return (
            <div className="profile-container">
              <div className="index-left">
                <div className="profile-box">
                  <h3 className="event-index-header">About Me</h3>
                  <ul className="profile-info">
                    <li>{this.props.currentUser.name}</li>
                    <li>{this.state.bio}</li>
                    <li>{this.state.pet_name}</li>
                    <li>{this.editLink()}</li>
                  </ul>
                  <Link className="create-event-link" to={'/new_event'}>Create an Event</Link>
                </div>
              </div>
              <div className="index-right">
                <div className="profile-events">
                  <ul className="events-list">
                    {this.state.events.map(event => (
                      <ProfileItem key={event._id} event={event} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        }
      }
}

export default Profile;