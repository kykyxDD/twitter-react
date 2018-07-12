import React from 'react';
import { Link } from 'react-router-dom';

export default function DoneNewPassword () {
  return (
    <div>
      <div className="d-flex pt-4 pb-5">
        <div className="my-auto"><i className="far fa-check-circle text-primary fa-2x"></i></div>
        <div className="font-weight-bold h3 my-auto pl-3">Поздравляем! Вы успешно изменили свой пароль.</div>
      </div>
      <Link to="/home" className="btn btn-primary font-weight-bold">Перейти в Твиттер</Link>
    </div>
  )
}