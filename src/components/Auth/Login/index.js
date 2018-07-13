import React, { Component } from 'react';
import LoginHeader from './Header.js';
import PageOut from './PageOut.js';
import { configTitle } from 'helper/configTitle.js'
import './../auth.scss';

class Login extends Component {
  componentWillMount(){
    // console.log('componentWillMount')
    document.title = configTitle.login
    document.body.classList.add('bg-grey')
  }
  componentWillUnmount (){
    document.body.classList.remove('bg-grey')
  }
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