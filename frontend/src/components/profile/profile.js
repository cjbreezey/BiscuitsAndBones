import React from 'react';
import EventBox from '../events/event_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserEvents(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ events: newState.events });
    }   
    
    render() {
        if (this.state.events.length === 0) {
          return (<div>This user has no events</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Events</h2>
              {this.state.events.map(event => (
                <EventBox key={event._id} description={event.description} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;