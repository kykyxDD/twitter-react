import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPathNumber, getCodedEmail } from './../../../helper/configConst';

function MessageToEmail(props){
  return (
    <div>
      <h1>Проверьте свою электронную почту</h1>
      <p>
        Мы отправили письмо на электронный адрес <b>{getCodedEmail(props.email)}</b>. Перейдите по ссылке в письме для сброса пароля.
      </p>
      <p>
        Если письма нет во входящих, то попробуйте найти его в других папках (например, &laquo;Спам&raquo;, &laquo;Социальные сети&raquo; или другие).
      </p>
    </div>
  )
}
function MessageToPhone(props){
  return (
    <div>
      <h1>Проверьте ваш телефон</h1>
      <p>Вам отправлен код подтверждения на телефон, заканчивающийся на '<b>{getPathNumber(props.number)}</b>'. Введите полученный код ниже для восстановления пароля.</p>
        <form>
        <div className="form-group py-2">
          <input type="text" className="form-control btn-radius search-account" id="name" placeholder="Введите код"/>
        </div>
        <Link to='/reset/new_password_reset' className="px-3 font-weight-bold btn btn-primary btn-radius" >Отправить</Link>
      </form>
    </div>
  )
}

class ConfirmPinReset extends Component {
  render () {
    return (
      <div>
        { this.props.user.reset.email ? 
          <MessageToEmail email={this.props.user.email}/> : 
          <MessageToPhone number={this.props.user.number}/>
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(ConfirmPinReset);