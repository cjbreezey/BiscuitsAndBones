import React from "react";
import { withRouter, Link } from "react-router-dom";

class EventShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        debugger 
        this.props.fetchEvent(this.props.match.params.event_id);
        // this.props.fetchUsers();

    }

    // componentWillMount() {
    //     this.props.fetchEvent(event);
    // }

    // componentWillReceiveProps(newState) {
    //     this.setState({ events: newState.events });
    // }

    render() {
        debugger
        if (!this.props.event) return null;
        // if (this.state.event.length === 0) {
        //     return (
        //         <div className="events-index-container">
        //             <h1>There are no Events</h1>
        //             <Link to={'/new_event'}>Create an Event</Link>
        //         </div>)

        // } else {
            return (
                <div className="events-index-container">
                    <div className="index-left">
                        <div className="create-event-box">
                            <h2 className="event-index-header">All Events</h2>
                            <Link className="create-event-link" to={'/new_event'}>Create an Event</Link>
                        </div>
                    <p>{this.props.event.description}</p>
                    <p>this is below description</p>
                    </div>
                </div>
            );
        }
    }
// }

export default withRouter(EventShow);