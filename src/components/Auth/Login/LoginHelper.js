
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginHelper extends Component {
  render() {
    return (
      <div className="pageout--helper">
        <div className="pageout--wrapper">
          <div className="py-3">Не пользуетесь Твиттером? <Link to='/signup' className=" " >Зарегистрируйтесь прямо сейчас &raquo; </Link></div>
        </div>
      </div>
    )
  }
}

export default LoginHelper;