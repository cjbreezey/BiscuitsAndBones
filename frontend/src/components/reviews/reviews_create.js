import React from 'react'

class ReviewCreate extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
          rating: "",
          description: "",
          event_id: this.props.event[0]._id,
          reviewer_id: this.props.currentUser.id
      }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e){
    e.preventDefault();
    let review = {
      rating: this.state.rating,
      description: this.state.description,
      event_id: this.state.event_id,
      reviewer_id: this.state.reviewer_id,
    };
    this.props.createReview(review);
    this.setState({ description: "" });
    this.setState({ rating: "" });
    this.props.closeModal();
  }


  render(){
      return(
        <form className="reviews-form">
          <label>Feedback</label>
          <textarea 
                className="rev-description"
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                placeholder="Leave event feedback!"
                />
          <label> Rating  </label>
          <div className="rating-button-div">
          <input className="num-input" type="number" min="1" max="5" value={this.state.rating} onChange={this.update('rating')} placeholder="1 - 5">
          </input>
          <button onClick={this.handleSubmit} > Create Review</button>
          </div>
        </form>
      )
  }
}

export default ReviewCreate