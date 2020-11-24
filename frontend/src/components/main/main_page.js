import React from 'react';
import './main_page.css'

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page-container">
        <div className="main-page-body">
          <p className="main-description">
            Are you a pet owner who wishes your pet had a friend to play with 
            nearby? Biscuits and Bones is a web app that helps pet owners host, 
            attend, and connect with other owners to set up playdates. Join today!
          </p>
        </div>
        <div className="gtku-container">
          <p className="gtku"> Who are we? </p>
          <div className="main-links">
            <div>
              <p className='main-name'>Peter Min</p>
              <div className="our-links">
                <a href="https://github.com/pmin825" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"/></a>
                <a href="https://www.linkedin.com/in/peter-min-02a62a13a/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                <a href="https://angel.co/u/peter-min-1" target="_blank" rel="noreferrer"><i className="fa fa-angellist" aria-hidden="true"></i></a>
              </div>
            </div>
            <div>
              <p className='main-name'>Jonathan Siu</p>
              <div className="our-links">
                <a href="https://github.com/jonsiu826" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"/></a>
                <a href="https://www.linkedin.com/in/jonathansiu826/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                <a href="https://angel.co/jonathan-siu-2" target="_blank" rel="noreferrer"><i className="fa fa-angellist" aria-hidden="true"></i></a>
              </div>
            </div>
            <div>
              <p className='main-name'>Chris Lee</p>
              <div className="our-links">
                <a href="https://github.com/cjbreezey" target="_blank"><i className="fa fa-github" aria-hidden="true"/></a>
                <a href="https://www.linkedin.com/in/christopher-j-lee/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                <a href="https://angel.co/u/christopher-lee-93" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a>
              </div>
            </div>
            <div>
              <p className='main-name'>Taylor Lee</p>
              <div className="our-links">
                <a href="https://github.com/xtaylor117" target="_blank"><i className="fa fa-github" aria-hidden="true"/></a>
                <a href="https://www.linkedin.com/in/taylorlee117/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                <a href="https://angel.co/u/taylor-lee-18" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;