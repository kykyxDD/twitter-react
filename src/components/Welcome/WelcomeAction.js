import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import './welcome.scss';
import { Link } from 'react-router-dom';

class WelcomeAction extends Component {
  render() {
    return (
      <div className='welcome--actions d-flex h-100 position-relation'>
        <div className='position-absolute w-100 d-none d-xl-block'>
          <form className="d-flex py-3 welcome--formLogin justify-content-between">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div>
              <Link to='/login' className="font-weight-bold btn btn-outline-primary" >Войти</Link>
            </div>
          </form>
        </div>
        <div className='m-auto welcome--actions-content text-left py-4'>
          <div className="d-flex justify-content-between mb-3 align-items-center"> 
            <div> <i className="fab fa-twitter text-primary fa-2x "></i> </div>
            <div className="d-xl-none"> <Link to='/login' className="font-weight-bold btn btn-outline-primary" >Войти</Link></div>
          </div>
          <div className="font-weight-bold h3 mb-5">Узнайте, что происходит в мире прямо сейчас.</div>
          <div className="font-weight-bold h5 mb-3">Присоединяйся к Твиттеру прямо сейчас!</div>
          <div className=''>
            <Link to='/signup' className="w-100 mb-3 font-weight-bold btn btn-primary" >Регистрация</Link>
            <Link to='/login' className="w-100 font-weight-bold btn btn-outline-primary" >Войти</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeAction;