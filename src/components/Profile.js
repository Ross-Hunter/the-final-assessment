import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <h2>Profile</h2>
        <h3>Welcome, Person</h3>
        <div class="flex-container">
          <img src="/images/taylorswift.jpg" />
          <ul>
            <li>Email</li>
            <li>Phone Number</li>
            <li>Location</li>
          </ul>
        </div>
        <h4>Edit Profile</h4>
      </div>
    );
  }
}

export default Profile;
