import React from 'react';
import ProfileItem from '../profile/profile_item';
import { Link } from 'react-router-dom'
import './profile.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }
    
    componentWillMount() {
        // console.log(this.props.currentUser.id)
        this.props.fetchEvents();
    }

    componentWillReceiveProps(newState) {
        this.setState({ events: newState.events });
    }   
    
    render() {
        if (this.state.events.length === 0) {
          return (<div className="profile-container">This user has no events</div>)
        } else {
          return (
            <div className="profile-container">
              <div className="index-left">
                <h2 className="event-index-header">All of This User's Events</h2>
                <Link className="create-event-link" to={'/new_event'}>Create an Event</Link>
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