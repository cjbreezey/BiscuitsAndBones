import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import EventBox from './event_box';
import EventCreate from './event_create';
import './events.css';
import Carousel from 'react-elastic-carousel';


class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.props.fetchEvents();
    // this.props.fetchUsers();
    
  }

  componentWillMount() {
    this.props.fetchEvents();
    // this.props.fetchUsers();
  }

  componentWillReceiveProps(newState) {
    this.setState({ events: newState.events });
  }

  render() {

           const breakPoints = [
            {width: 400, itemsToShow: 2},
            {width: 700, itemsToShow: 3},
            {width: 900, itemsToShow: 4},
            {width: 1100, itemsToShow: 5}
        ]
        const photos = [
          {
                name: "Chris",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/puppyprofile.jpeg",
                link: "/profile/5f964b26e1a56307c8e30a44"

            },
            {
                name: "Peter",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/1605243626151-gamephoto.png",
                link: "/profile/5f9645728dd566007162b85b"

            },
          
            {
                name: "Taylor",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/Screen%20Shot%202020-11-12%20at%2010.31.19%20AM.png",
                link: "/profile/5f9791529752b708b14a2f9e"
            },
            {
                name: "Jonathan",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/image%20%282%29.png",
                link: "/profile/5f970d7ac22fd94cbc59c1eb"

            },
            {
                name: "Chris",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/puppyprofile.jpeg",
                link: "/profile/5f964b26e1a56307c8e30a44"

            },
            {
                name: "Peter",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/1605243626151-gamephoto.png",
                link: "/profile/5f9645728dd566007162b85b"

            },
          
            {
                name: "Taylor",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/Screen%20Shot%202020-11-12%20at%2010.31.19%20AM.png",
                link: "/profile/5f9791529752b708b14a2f9e"
            },
            {
                name: "Jonathan",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/puppyprofile.jpeg",
                link: "/profile/5f970d7ac22fd94cbc59c1eb"

            }
         
         
        ]

    if (this.state.events.length === 0) {
      return (
      <div className="events-index-container">
          <h1>There are no Events</h1>
          <Link to={'/new_event'}>Create an Event</Link>
      </div>)

    } else {
      return (
        <div className="events-index-container">
          <div className="index-left">
            <div className="create-event-box">
              <h2 className="event-index-header">All Events</h2>
              <Link className="create-event-link" to={'/new_event'}>Create an Event</Link>
            </div>
          </div>
        <div className="index-right">
            <ul className="events-list">
              {/* <EventCreate /> */}
              {this.state.events.map((event) => {
                return <EventBox event={event} key={event._id} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} joinEvent={this.props.joinEvent} updateEvent={this.props.updateEvent}/>
              })}
            </ul>
        </div>
        <div id="carousel-container">
          <h2 id="carousel-title">Fellow Animal Lovers</h2>
            <Carousel breakPoints={breakPoints}>
                  {photos.map((photo , idx) => {
                      return(
                          <Link key={idx} to={photo.link}className="carousel-box">
                                <img id="carousel-image" src={photo.url}/>
                                <p id="carousel-name">{photo.name}</p>
                          </Link>  
                      )
                    }
                )}
              </Carousel>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Events);