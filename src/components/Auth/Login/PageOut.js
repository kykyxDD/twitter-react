import React, { Component } from 'react';
// import './../login.scss';
// import { Link } from 'react-router-dom';
import LoginForm from './LoginForm.js';
import LoginHelper from './LoginHelper.js';

class PageOut extends Component {
  render() {
    return (
      <div className="login--pageout">
        <div className="page--container">
          <LoginForm/>
          <LoginHelper/>
        </div>
      </div>
    )
  }
}

export default PageOut;