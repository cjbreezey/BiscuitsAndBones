import React from 'react';

class ReviewsIndexItem extends React.Component {

    render(){
        let deletebutton;
        if (this.props.currentUser && this.props.currentUser.id === this.props.review.reviewer_id) {
            deletebutton = <button className="review-delete" onClick={() => this.props.deleteReview(this.props.review._id)}> X </button>
        } else {
            deletebutton = null
        }
        
           return  <div  className="reviews-list">
                <li className="review-rating">{this.props.review.rating}<i className="fa fa-star"></i></li>
                <li className="review-description">{this.props.review.description}</li>
                {deletebutton}
            </div>
    }
}

export default ReviewsIndexItem