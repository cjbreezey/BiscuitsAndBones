import React from 'react';

class EventBox extends React.Component {
  constructor(props){
    super(props)

    this.handleclick = this.handleclick.bind(this);
    this.dropdownClick = this.dropdownClick.bind(this);
  }

  handleclick(e){
    this.props.deleteEvent(this.props.event._id)
  }

  dropdownClick(e){
    debugger
    let dropdown = document.getElementById(`dropdown-slide-${this.props.event._id}`)
    dropdown.classList.toggle('open')

    let dropdownItem = document.getElementById(`dropdown-items-${this.props.event._id}`)

    if (dropdownItem.style.display === "") {
      dropdownItem.style.display = "block";
    }
    else if (dropdownItem.style.display === "none") {
      dropdownItem.style.display = "block";
    } else {
      dropdownItem.style.display = "none";
    }
  }

  render() {
    if (!this.props.event) return null;
    return (
      <div className="event-item-container">
        <div onClick={this.dropdownClick} className="event-item">
          <h3>{this.props.event.description}</h3>
          <button onClick={() => this.props.deleteEvent(this.props.event._id)}> Delete Event</button>
        </div>
        <div id={`dropdown-slide-${this.props.event._id}`} className="event-dropdown">
          <ul id={`dropdown-items-${this.props.event._id}`} className="event-dropdown-items">
            <li>{this.props.event.location}</li>
            <li>{this.props.event.date}</li>
            <li>{this.props.event.time}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EventBox;