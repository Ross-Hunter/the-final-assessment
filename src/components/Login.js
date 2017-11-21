import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    if (this.props.userIsAlreadyLoggedIn) {
      return null;
    }

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h2>Sign In</h2>
          <input type="text"
                 value={this.state.username}
                 onChange={this.handleName} />
          <br />
          <input type="password"
                 value={this.state.password}
                 onChange={this.handlePassword} />
          <br />
          <button type="submit">Sign In</button>
        </form>
        <span>Forgot your password?</span>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.login(this.state.username, this.state.password);

    this.setState({
      username: '',
      password: ''
    })
  }

  handleName = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
}

const mapActionsToProps = { login };

const mapStateToProps = (state) => {
  return {
    userIsAlreadyLoggedIn: !!state.loggedInUser
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Login);
