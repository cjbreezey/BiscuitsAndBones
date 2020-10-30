import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from '../profile/profile_item';
import './profile.css'

class Profile extends React.Component {
    constructor(props) {
    debugger 
        super(props);
        this.state = {
            name: this.props.currentUser.name,
            bio: this.props.currentUser.bio,
            picture: "",
            pet_name: this.props.currentUser.pet_name
        }
    }
    
    componentDidMount () {
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
      debugger 
        if (this.props.events.length === 0) {
          return (<div className="profile-container">This user has no events</div>)
        } else {
          return (
            <div className="profile-container">
              <div>
                <h3>About Me</h3>
                <ul>
                  <li>{this.props.currentUser.name}</li>
                  <li>{this.props.bio}</li>
                  <li>{this.props.pet_name}</li>
                    {this.editLink()}
                </ul>
              </div>
              <h2>All of This User's Events</h2>
              {this.props.events.map(event => (
                <ProfileItem key={event._id} event={event} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;