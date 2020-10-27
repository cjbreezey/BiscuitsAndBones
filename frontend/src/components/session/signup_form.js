import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup_form.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.nameSubmit = this.nameSubmit.bind(this);
    this.clearedErrors = false;
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/events');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  nameSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2
    };

    let transition = document.getElementById('signup-transition')
    transition.classList.toggle('signup-slide-out')

    this.props.signup(user, this.props.history);
  }

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
      <div className="signup-form-container">
        <div id="signup-transition" className="signup-slide-in">
          <p className="session-header">Signup</p>
          <form className="login-signup" onSubmit={this.nameSubmit}>
            <div className="signup-form">
              <br/>
                <input 
                  className="session-form"
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              <br/>
                <input 
                  type="text"
                  className="session-form"
                  value={this.state.name}
                  onChange={this.update('name')}
                  placeholder="Name"
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
                <input
                  className="session-form"
                  type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                />
              <br/>
              <input id="signup-toggle" className="session-form" type="submit" value="Woof!" />
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);