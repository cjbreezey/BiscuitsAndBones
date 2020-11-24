import React from 'react';
import ReviewsIndexItem from '../reviews/reviews_index_item'
import './reviews.css'


class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.reviews
    }
  }

  componentDidMount() {
    this.props.fetchReviews();

    
  }

  componentWillMount() {
    this.props.fetchReviews();

  }

  componentWillReceiveProps(newState) {
    this.setState({ reviews: newState.reviews });
  }

  render() {
    debugger
    if (this.state.reviews.length === 0) {
      return (
      <div>
          <h1 className="empty-review-index-header">There are no Reviews</h1>
      </div>)

    } else {
      return (
        <div className="past-event-reviews">
            <h1 className="month">All Reviews</h1>
            <ul className="review-box">
              {this.state.reviews.map((review) => {
                return <ReviewsIndexItem review={review} key={review._id} event={this.props.event} currentUser={this.props.currentUser} deleteReview={this.props.deleteReview} />
              })}
            </ul>
        </div>
      );
    }
  }
}

export default ReviewsIndex;