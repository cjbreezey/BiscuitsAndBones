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
              <div>
                <h3>About Me</h3>
                <ul>
                  <li>{this.props.currentUser.name}</li>
                  <li>{this.state.bio}</li>
                  <li>{this.state.pet_name}</li>
                    {this.editLink()}
                </ul>
              </div>
              <h2>All of This User's Events</h2>
              {this.state.events.map(event => (
                <ProfileItem key={event._id} event={event} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;