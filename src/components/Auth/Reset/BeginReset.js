import React from 'react';
import { Link } from 'react-router-dom';

export default function BeginReset() {
  return (
    <div>
      <h1>Найдите свою учётную запись в Твиттере</h1>
      <p className='pt-3'>Укажите адрес электронной почты, номер телефона или имя пользователя.</p>
      <form>
        <div className="form-group py-2">
          <input type="name" className="form-control btn-radius search-account" id="name"/>
        </div>
        <Link to='/reset/send_reset' className="px-3 font-weight-bold btn btn-primary btn-radius" >Поиск</Link>
      </form>
    </div>
  )
}
