import { findMatchingUser } from '../users';

export function login(username, password) {
  return function(dispatch) {
    const user = findMatchingUser(username, password);
    // If it username/password are correct, a user object will be available
    if (user) {
      console.log('you matched');
      dispatch(loginSuccess(user));
    } else {
      console.log('you did not match');
    }
  };
}

function loginSuccess(user) {
  return {
    type: 'LOGIN_SUCCESS',
    user: user
  }
}
