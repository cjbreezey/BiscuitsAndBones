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
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(e) {
    e.preventDefault()
    const demo = {email: 'demo@aa.io', password: 'password'}
    const speed = 100;
    if (this.state.email !== demo.email) {
      const inputEmail = setInterval(() => {
        if (this.state.email !== demo.email) {
          const temp = demo.email.slice(0, this.state.email.length + 1);
          this.setState({ email: temp })
        } else {
          clearInterval(inputEmail);
          animatePW()
        }
      }, speed)
    }

    const animatePW = () => {
      if (this.state.password !== demo.password) {
        const inputPassword = setInterval(() => {
          if (this.state.password !== demo.password) {
            const temp = demo.password.slice(0, this.state.password.length + 1);
            this.setState({password: temp});
          } else {
            clearInterval(inputPassword);
            this.props.demoLogin(demo)
          }
        }, speed)
      }
    }

  }

  render() {

    const demoButton = <button className="demo-button" onClick={this.demoLogin}>Demo Login!</button>

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
              {demoButton}
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);