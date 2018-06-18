
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SignupHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className='header--container d-flex justify-content-between align-items-center py-3'>
          <div className="d-flex align-items-center">
            <i className="fas fa-arrow-left text-primary"></i>
            <div className="header--search ml-3">
              <input type="text"  placeholder="Поиск по Твиттеру"/>
              <span className="header--searchIcon"><i className="fas fa-search"></i></span>
            </div>
          </div>
          <div className='d-flex align-items-center'>
            <Link to='/login'  className="w-100 font-weight-bold btn-radius py-1 mr-2 btn btn-outline-primary" >Войти</Link>
            <Link to='/signup' className="w-100 font-weight-bold btn-radius py-1 mr-2 btn btn-primary" >Зарегистрироваться</Link>
            <div className="pt-1"> <i className="fas fa-ellipsis-v text-primary fa-lg"></i> </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default SignupHeader;