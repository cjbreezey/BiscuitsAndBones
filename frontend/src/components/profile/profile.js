import React from 'react';
import EventBox from '../events/event_box';
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
      debugger
        this.setState({ events: newState.events });
    }   
    
    render() {
      debugger
        if (this.state.events.length === 0) {
          return (<div className="profile-container">This user has no events</div>)
        } else {
          return (
            <div className="profile-container">
              <h2>All of This User's Events</h2>
              {this.state.events.map(event => (
                <EventBox key={event._id} event={event} deleteEvent={this.props.deleteEvent} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;