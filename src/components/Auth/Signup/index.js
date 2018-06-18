import React, { Component } from 'react';
import SignupHeader from './Header.js';
import ModelSignup from "./ModalSignup.js";
import './../auth.scss';

class Signup extends Component {
  render() {
    return (
      <div>
        <SignupHeader/>
        <ModelSignup/>
      </div>      
    );
  }
}

export default Signup;