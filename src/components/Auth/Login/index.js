import React, { Component } from 'react';
import LoginHeader from './Header.js';
import PageOut from './PageOut.js';
import './../login.scss';

class Login extends Component {
  render() {
    return (
      <div>
        <LoginHeader />
        <PageOut />
      </div>
    );
  }
}

export default Login;