import { Link } from 'react-router-dom'
import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import ReviewCreate from '../reviews/reviews_create';


class PastProfileItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleclick = this.handleclick.bind(this);
    }

    handleclick(e) {
        this.props.deleteEvent(this.props.event._id)
    }

    render() {
        if (!this.props.event.date) return null

        let day = new Date();
        let today = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1);
        let inputDate = new Date(this.props.event.date)
        if (today <= inputDate) {
            return null
        } else {
            return (
                <div className="profile-event-item-container">
                    <div className="profile-event-item">
                        <h3 onClick={this.dropdownClick}>{this.props.event.title}</h3>
                        <Link to={`/events/${this.props.event._id}`}>
                        <button className="details-button">See More Details</button>
                         </Link>
                    </div>
                     {/* <ReviewsIndex event={this.props.event} reviews={this.props.reviews} fetchReviews={this.props.fetchReviews} currentUser={this.props.currentUser}  deleteReview={this.props.deleteReview}/> */}
                </div>
            );
        }
    }
}

export default GoogleApiWrapper({ apiKey: (process.env.REACT_APP_SECRET_KEY) })(PastProfileItem)