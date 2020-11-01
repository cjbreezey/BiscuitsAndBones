import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReviewsIndexItem from '../reviews/reviews_index_item'


class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.reviews
    }
  }

  componentDidMount() {
    this.props.fetchReviews();
    // this.props.fetchUsers();
    
  }

  componentWillMount() {
    this.props.fetchReviews();
    // this.props.fetchUsers();
  }

  componentWillReceiveProps(newState) {
      debugger
    this.setState({ reviews: newState.reviews });
  }

  render() {
      debugger
    if (this.state.reviews.length === 0) {
      return (
      <div>
          <h1>There are no Reviews</h1>
      </div>)

    } else {
      return (
        <div>
              <h2>All Reviews</h2>
            <ul>
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