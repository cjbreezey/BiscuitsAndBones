import { Link } from 'react-router-dom'
import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

class ProfileItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleclick = this.handleclick.bind(this);
    }

    

    handleclick(e) {
        this.props.deleteEvent(this.props.event._id)
    }

    render() {
        if (!this.props.event) return null;

        let deletebutton;
        if (this.props.currentUser && this.props.currentUser.id === this.props.event.host_id) {
            deletebutton = <button className="trash-button" onClick={() => this.props.deleteEvent(this.props.event._id)}><i className="fa fa-trash"></i></button>
        } else {
            deletebutton = null
        }

        if (!this.props.event.date) return null

      let day = new Date();
      let today = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1);
      let inputDate = new Date(this.props.event.date)
      if (today >= inputDate) {
        return null
      } else {
          return (
            <div className="profile-event-item-container">
                  <div className="profile-event-item">
                      <h3>{this.props.event.title}</h3>
                      <Link to={`/events/${this.props.event._id}`}>
                        <button className="details-button">See More Details</button>
                      </Link>
                      {deletebutton}
                  </div>
              </div>
          );
        }
    }
}

export default GoogleApiWrapper({apiKey: (process.env.REACT_APP_SECRET_KEY)})(ProfileItem)
