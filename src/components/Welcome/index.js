import React, { Component } from 'react';
import 'style/welcome.scss';
import WelcomeAction from './WelcomeAction';
import WelcomeInfo from './WelcomeInfo';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome d-flex welcome flex-wrap align-items-stretch">
        <div className='col-6 p-0 '>
          <WelcomeInfo />
        </div>
        <div className='col-6 p-0'>
          <WelcomeAction />
        </div>
      </div>
    );
  }
}

export default Welcome;