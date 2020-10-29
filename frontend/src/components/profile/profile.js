import React from 'react';
import ProfileItem from '../profile/profile_item';
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
              <div className="profile-events">
                <h2>All of This User's Events</h2>
                {this.state.events.map(event => (
                  <ProfileItem key={event._id} event={event} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} />
                ))}
              </div>
            </div>
          );
        }
      }
}

export default Profile;