import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  render() {
    return (
      <div className="pt-4 pb-2">
        <div className="formLogin pageout--wrapper">
          <div className="h3 text-left mt-2 mb-0 font-weight-bold">
            Войти в Твиттер
          </div>
          <form className="d-flex flex-column py-3 welcome--formLogin justify-content-between">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className='d-flex align-items-center pt-2'>
              <div className='mr-3'>
                <Link to='/login' className="font-weight-bold btn btn-primary" >Войти</Link>
              </div>
              <div>
                <label className='my-auto'>
                  <input type='checkbox' />
                  Запомнить меня
                </label>
              </div>
              <div className="pl-3">
                <a href='/#' className="my-auto">Забыли пароль?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;