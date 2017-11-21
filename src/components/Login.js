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

export default connect(null, mapActionsToProps)(Login);
