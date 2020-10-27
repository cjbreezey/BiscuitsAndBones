import React from 'react';
import EventBox from './event_box';
import './events.css'

class EventCreate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          description: "",
          newEvent: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newEvent: nextProps.newEvent.description});
  }

  handleSubmit(e) {
    e.preventDefault();
    let event = {
      description: this.state.description
    };

    this.props.createEvent(event); 
    this.setState({description: ''})
  }

  update() {
    return e => this.setState({
      description: e.currentTarget.value
    });
  }

  render() {
    return (
        <div className="create-event-container">
            <form className="create-form" onSubmit={this.handleSubmit}>
                <div>
                    <input className="create-event-input" type="textarea"
                        value={this.state.description}
                        onChange={this.update()}
                        placeholder="Write your event..."
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <EventBox description={this.state.newEvent} />
        </div>
    )
  }
}

export default EventCreate;