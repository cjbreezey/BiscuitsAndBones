// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import EventIndexItem from './event_index_item';
// import { Link } from 'react-router-dom';
// import './events.css';


// class EventIndex extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       events: []
//     }
//   }

//   componentWillMount() {
//     this.props.fetchEvents();
//   }

//   componentWillReceiveProps(newState) {
//     this.setState({ events: newState.events });
//   }

//   render() {
//     debugger
//     if (this.state.events.length === 0) {
//       return (
//       <div className="events-index-container">
//           <h1>There are no Events</h1>
//           <Link to={'/new_event'}>Create an Event</Link>
//       </div>)

//     } else {
//       return (
//         <div className="events-index-container">
//           <Link to={'/new_event'}>Create an Event</Link>
//           <h2>All Events</h2>
//           {this.state.events.map(event => (
//             <EventIndexItem key={event._id} event={event}  deleteEvent={this.props.deleteEvent}/>
//           ))}
//         </div>
//       );
//     }
//   }
// }

// export default withRouter(EventIndex);