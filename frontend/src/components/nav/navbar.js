import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }
  
  loggedIn() {
    if (this.props.loggedIn) {
      return(
        <div className="nav-bar logged-in">
          <Link className="nav-header" to={'/'}>Biscuits and Bones</Link>
          <div className="nav-links">
                <Link to={'/events'}>All Playdates</Link>
                <Link to={'/profile'}>Profile</Link>
                <button className="logout-button" onClick={this.logoutUser}>Logout</button>
          </div>
        </div>
      )
    } else {
      return(
        <div className="nav-bar">
          <Link className="nav-header" to={'/'}>Biscuits and Bones</Link>
          <div className="nav-links">
                  <Link to={'/signup'}>Signup</Link>
                  <Link to={'/login'}>Login</Link>          
          </div>
        </div>
      )
    }
  }
  // Selectively render links dependent on whether the user is logged in

  render() {
      return (
        <>
          {this.loggedIn()}
        </>
      );
  }
}

export default NavBar;