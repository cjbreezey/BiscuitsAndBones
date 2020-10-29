import { Link } from 'react-router-dom'
import React from 'react';

class ProfileItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleclick = this.handleclick.bind(this);
        this.dropdownClick = this.dropdownClick.bind(this);
    }

    handleclick(e) {
        this.props.deleteEvent(this.props.event._id)
    }

    dropdownClick(e) {
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

        let deletebutton;
        if (this.props.currentUser && this.props.currentUser.id === this.props.event.host_id) {
            deletebutton = <button onClick={() => this.props.deleteEvent(this.props.event._id)}> X </button>
        } else {
            deletebutton = null
        }
        // debugger
        if (!this.props.event.date) return null
        // debugger
        return (
            <div className="event-item-container">
                <div className="event-item">
                    <h3 onClick={this.dropdownClick} >{this.props.event.title}</h3>
                    {deletebutton}
                </div>
                <div id={`dropdown-slide-${this.props.event._id}`} className="event-dropdown">
                    <ul id={`dropdown-items-${this.props.event._id}`} className="event-dropdown-items">
                        <li> This is going to be the map.</li>
                        <li>{this.props.event.location}</li>
                        <li>{this.props.event.date.slice(0, 10)}</li>
                        <li>{this.props.event.time}</li>
                        <li>{this.props.event.description}</li>
                        <li><Link to={`/users/${this.props.event.host_id}`}>User</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProfileItem;