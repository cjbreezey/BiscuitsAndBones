import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import EventBox from './event_box';
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
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  componentWillReceiveProps(newState) {
    this.setState({ events: newState.events });
  }

  render() {

        const breakPoints = [
            {width: 400, itemsToShow: 3},
            {width: 700, itemsToShow: 4},
            {width: 900, itemsToShow: 5},
            {width: 1100, itemsToShow: 6}
        ]
        const photos = [
          {
                name: "Chris",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/1606175522153-B%26B.png",
                link: "/profile/5f964b26e1a56307c8e30a44"

            },
            {
                name: "Peter",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/1606242848852-babycheetah.jpg",
                link: "/profile/5f9645728dd566007162b85b"

            },
          
            {
                name: "Taylor",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/Screen%20Shot%202020-11-12%20at%2010.31.19%20AM.png",
                link: "/profile/5f9791529752b708b14a2f9e"
            },
            {
                name: "Jonathan",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/1606241211649-hedgehog.jpeg",
                link: "/profile/5fbd4b39fa4608758111f730"

            },
            {
                name: "JD",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/1606243563819-jdbat.jpg",
                link: "/profile/5fbd52e5b21902ebeeedf8fa"

            },
            {
                name: "Tri",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/1606243734534-trisloth.jpg",
                link: "/profile/5fbd5513b21902ebeeedf8fb"

            },
          
            {
                name: "Jacky",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/1606243906210-cat_tree.jpg",
                link: "/profile/5fbd55c1b21902ebeeedf8fc"
            },
            {
                name: "Kevin",
                url: "https://biscuitsandbones-profilepics.s3.us-west-1.amazonaws.com/1606247579922-cat.png",
                link: "/profile/5fbd6383ac66998b2da2cf88"

            }
         
         
        ]

    if (this.state.events.length === 0) {
      return (
      <div className="events-index-container">
          <h1>There are no Events</h1>
          <Link to={'/new_event'}>Setup a Playdate!</Link>
      </div>)

    } else {
      return (
        <div className="events-index-container">
          <div className="index-left">
            <div className="create-event-box">
              <h2 className="event-index-header">All Events</h2>
              <Link className="create-event-link" to={'/new_event'}>Setup a Playdate!</Link>
            </div>
            <div className="social-links">
                <div>
                <p className="sidebar-name">Peter Min</p>
                <div className="our-links">
                  <a href="https://github.com/pmin825" target="_blank"><i className="fa fa-github" aria-hidden="true"/></a>
                  <a href="https://www.linkedin.com/in/peter-min-02a62a13a/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                  <a href="https://angel.co/u/peter-min-1" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a>
                </div>
              </div>
              <div>
                <p className="sidebar-name">Jonathan Siu</p>
                <div className="our-links">
                  <a href="https://github.com/jonsiu826" target="_blank"><i className="fa fa-github" aria-hidden="true"/></a>
                  <a href="https://www.linkedin.com/in/jonathansiu826/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                   <a href="https://angel.co/jonathan-siu-2" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a>
                </div>
              </div>
              <div>
                <p className="sidebar-name">Chris Lee</p>
                <div className="our-links">
                  <a href="https://github.com/cjbreezey" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"/></a>
                  <a href="https://www.linkedin.com/in/christopher-j-lee/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                  <a href="https://angel.co/u/christopher-lee-93" target="_blank" rel="noreferrer"><i className="fa fa-angellist" aria-hidden="true"></i></a>
                </div>
              </div>
              <div>
                <p className="sidebar-name">Taylor Lee</p>
                <div className="our-links">
                  <a href="https://github.com/xtaylor117" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"/></a>
                  <a href="https://www.linkedin.com/in/taylorlee117/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                  <a href="https://angel.co/u/taylor-lee-18" target="_blank" rel="noreferrer"><i className="fa fa-angellist" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        <div className="index-right">
            <ul className="events-list">
              {this.state.events.map((event) => {
                return <EventBox event={event} key={event._id} currentUser={this.props.currentUser} deleteEvent={this.props.deleteEvent} joinEvent={this.props.joinEvent} updateEvent={this.props.updateEvent}/>
              })}
            </ul>
        </div>
        <div id="carousel-container">
            <Carousel breakPoints={breakPoints}>
                  {photos.map((photo , idx) => {
                      return(
                          <Link key={idx} to={photo.link} className="carousel-box">
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