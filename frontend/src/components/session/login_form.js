import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (Object.values(nextProps.errors).length > 0) {
      let transition = document.getElementById('login-transition')
      transition.classList.toggle('login-slide-out')
      transition.classList.toggle('login-slide-in')
    }

    if (nextProps.currentUser === true) {
      this.props.history.push('/events');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };
    
  
    let transition = document.getElementById('login-transition')
    transition.classList.toggle('login-slide-in')
    transition.classList.toggle('login-slide-out')

    this.props.login(user) 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form">
        <div id="login-transition" className="login-slide-in">
          <p className="session-header">Login</p>
          <form className="login-signup" onSubmit={this.handleSubmit}>
            <div className="signup-form">
                <input autofocus
                  className="session-form"
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              <br/>
                <input 
                  className="session-form"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              <br/>
              <input id="login-toggle" className="session-form" type="submit" value="Woof!" />
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);