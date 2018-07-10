import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class LoginHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className='header--container'>
          <ul className="header--menu">
            <li className="">
              <div className='py-2'> 
                <i className="fab fa-twitter text-primary mx-2"></i>
                <span className="text-menu ">Сброс пароля</span></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LoginHeader;