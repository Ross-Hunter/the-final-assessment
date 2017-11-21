import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <div className="Profile">
        <h2>Profile</h2>
        <h3>Welcome, {this.props.user.name}</h3>
        <div className="flex-container">
          <img src={this.props.user.img} />
          <ul>
            <li>Email: {this.props.user.email}</li>
            <li>Phone Number: {this.props.user.phone}</li>
            <li>Location: {this.props.user.location}</li>
          </ul>
        </div>
        <h4>Edit Profile</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loggedInUser
  }
}

export default connect(mapStateToProps, null)(Profile);
