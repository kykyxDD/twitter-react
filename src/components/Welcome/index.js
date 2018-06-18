import React, { Component } from 'react';
import './welcome.scss';
import WelcomeAction from './WelcomeAction';
import WelcomeInfo from './WelcomeInfo';

class Welcome extends Component {
  render() {
    return (
      <div className='page--welcome'>
        <div className="welcome d-flex welcome flex-wrap align-items-stretch flex-column flex-md-row-reverse">
          <div className='col-md-6 col-12 p-0'>
            <WelcomeAction />
          </div>
          <div className='col-md-6 col-12 p-0 '>
            <WelcomeInfo />
          </div>
        </div>
        <footer className='w-100 welcome__footer d-flex justify-content-center py-2 mt-auto'>
          <div>О нас</div>
        </footer>
      </div>
    );
  }
}

export default Welcome;