import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from '../profile/profile_item';
import PastProfileItem from '../profile/past_profile_item';
import './profile.css'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   name: this.props.currentUser.name,
        //   bio: this.props.currentUser.bio,
        //   pet_name: this.props.currentUser.pet_name,
        //   events: []
        // }
    }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.user_id !== prevProps.match.params.user_id) {
      this.props.fetchUser(this.props.match.params.user_id)
    }
  }
    
    componentDidMount() {
        // console.log(this.props.currentUser.id)
        this.props.fetchEvents();
        this.props.fetchUser(this.props.profileUser);
        // this.props.fetchUser(this.props.currentUser.id)
    }

    componentWillReceiveProps(newState) {
        this.setState({ events: newState.events });
    }
    
    editLink() {
      debugger
      if (this.props.currentUser.id === this.props.profileInfo.id) {
        return (
          <div className="create-edit-button-container">
            <button className="profile-edit-button" onClick={() => this.props.openModal("editprofile")}>Edit</button>
            <Link className="create-event-link" to={'/new_event'}>Set Up a Playdate</Link>
          </div>
        )
      }
    }
    
    render() {
      if (!this.props.profileInfo) return null;
      
        if (this.props.events.length === 0) {
          return (
            <div className="profile-container">
              <div className="index-left">
                <div className="profile-box">
                  <h3 className="event-index-header">About Me</h3>
                  <ul className="profile-info">
                    <li><img className="profile-picture" src={this.props.profileInfo.profilePicture}/></li>
                    <li>{this.props.profileInfo.name}</li>
                    <li>{this.props.profileInfo.bio}</li>
                    <li>{this.props.profileInfo.pet_name}</li>
                    <li>{this.editLink()}</li>
                  </ul>
                  {/* <Link className="create-event-link" to={'/new_event'}>Create an Event</Link> */}
                </div>
              </div>
              <div className="index-right">
                <div className="profile-events">
                  <div className="empty-events">This user has no upcoming events.</div>
                </div>
              </div>
            </div>
          )
        } else {
          return (
            <div className="profile-container">
              <div className="index-left">
                <div className="profile-box">
                  <h3 className="event-index-header">About Me</h3>
                  <ul className="profile-info">
                    <li><img className="profile-picture" src={this.props.profileInfo.profilePicture}/></li>
                    <li>Name: {this.props.profileInfo.name}</li>
                    <li>Bio: {this.props.profileInfo.bio}</li>
                    <li>Pet Name: {this.props.profileInfo.pet_name}</li>
                    <li>{this.editLink()}</li>
                  </ul>
                  {/* <Link className="create-event-link" to={'/new_event'}>Create an Event</Link> */}
                </div>
              </div>
              <div className="index-right">
                <div className="profile-upcoming-events">
                  <h3>Upcoming Events</h3>
                  <ul className="events-list">
                    {this.props.events.map(event => (
                      <ProfileItem key={event._id} event={event} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} />
                    ))}
                  </ul>
                </div>
                <div className="profile-past-events">
                  <h3>Past Events</h3>
                  <ul className="events-list">
                    {this.props.events.map(event => (
                      <PastProfileItem key={event._id} reviews={this.props.reviews} event={event} fetchReviews={this.props.fetchReviews} deleteReview={this.props.deleteReview} currentUser={this.props.currentUser} createReview={this.props.createReview} deleteEvent={this.props.deleteEvent} openModal={this.props.openModal}/>
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