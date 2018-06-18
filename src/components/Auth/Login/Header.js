import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className='header--container'>
          <ul className="header--menu">
            <li className="">
              <Link to="/welcome"> 
                <i className="fab fa-twitter text-primary mx-2"></i>
                <span className="text-menu  d-lg-inline-block d-none">Главная</span></Link>
            </li>
            <li className="">
              <Link to="/welcome"><span className="text-menu  d-lg-inline-block d-none">О нас</span></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LoginHeader;