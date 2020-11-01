import React from 'react';

class ReviewsIndexItem extends React.Component {
    constructor(props){
        super(props)
       
    }


    render(){
           let deletebutton;
        if (this.props.currentUser && this.props.currentUser.id === this.props.review.reviewer_id) {
            deletebutton = <button onClick={() => this.props.deleteReview(this.props.review._id)}> X </button>
        } else {
            deletebutton = null
        }
        if (this.props.review.event_id === this.props.event._id){
            debugger
           return  (<div>
                <li>{this.props.review.rating}</li>
                <li>{this.props.review.description}</li>
                {deletebutton}
            </div>)
        } else {
            return null 
        }
    }
}

export default ReviewsIndexItem