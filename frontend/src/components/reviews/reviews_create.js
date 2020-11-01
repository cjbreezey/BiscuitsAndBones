import React from 'react'

class ReviewCreate extends React.Component {
  constructor(props) {
      super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
          rating: "",
          description: "",
          event_id: this.props.event._id,
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
        reviewer_id: this.state.reviewer_id 
     };
    this.props.createReview(review)
    this.setState({description: ''})
    this.setState({rating: ''})
  }

  render(){
      return(
        <form>
          <input 
                type="text"
                value={this.state.rating}
                onChange={this.update('rating')}
                />
          <input 
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                    />
            <button onClick={this.handleSubmit}> Create Review</button>
        </form>
      )
  }
}

export default ReviewCreate