import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from '../profile/profile_item';
import PastProfileItem from '../profile/past_profile_item';
import './profile.css'

class Profile extends React.Component {
    constructor(props) {
    debugger 
        super(props);
        debugger
        // this.state = {
        //   name: this.props.currentUser.name,
        //   bio: this.props.currentUser.bio,
        //   pet_name: this.props.currentUser.pet_name,
        //   events: []
        // }
    }
    
    componentDidMount() {
        // console.log(this.props.currentUser.id)
        this.props.fetchEvents();
        // this.props.fetchUser(this.props.currentUser.id)
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
      debugger
        if (this.props.events.length === 0) {
          return (
              <div>
                <div className="profile-container">
                  <h3>About Me</h3>
                  <ul>
                    <li>{this.props.currentUser.name}</li>
                    <li>{this.props.currentUser.bio}</li>
                    <li>{this.props.currentUser.pet_name}</li>
                      {this.editLink()}
                  </ul>
                </div>
              <div className="profile-container">This user has no events</div>
            </div>
          )
        } else {
          return (
            <div className="profile-container">
              <div className="index-left">
                <div className="profile-box">
                  <h3 className="event-index-header">About Me</h3>
                  <ul className="profile-info">
                    <li>{this.props.currentUser.name}</li>
                    <li>{this.props.currentUser.bio}</li>
                    <li>{this.props.currentUser.pet_name}</li>
                    <li>{this.editLink()}</li>
                  </ul>
                  <Link className="create-event-link" to={'/new_event'}>Create an Event</Link>
                </div>
              </div>
              <div className="index-right">
                <div className="profile-events">
                  <h3>Upcoming Events</h3>
                  <ul className="events-list">
                    {this.props.events.map(event => (
                      <ProfileItem key={event._id} event={event} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} />
                    ))}
                  </ul>
                </div>
                <div className="profile-events">
                  <h3>Past Events</h3>
                  <ul className="events-list">
                    {this.props.events.map(event => (
                      <PastProfileItem key={event._id} event={event} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} />
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