import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import defaultProfile from './../../../images/default_profile_normal.png';
import { getPathNumber, getCodedEmail } from './../../../helper/configConst';


function BeginReset() {
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

class SendReset extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getImagePhoto = this.getImagePhoto();
  }
  getImagePhoto() {
    return this.props.user.photo ? this.props.user.photo : defaultProfile;
  }

  onChange (e) {
    console.log("onChange")
    e.preventDefault()
  }
  
  render () {
    return (
      <div>
        <h1>Как вы хотите сбросить пароль</h1>

        <div className="d-flex pt-4">
          <div className="icon" style={{backgroundImage: `url(${this.getImagePhoto})`}}>
          </div>
          <div className="pl-3 info_searched_user">
            <div className="font-weight-bold">{this.props.user.name}</div>
            <div className="text-muted">@{this.props.user.login}</div>
          </div>
        </div>

        <p className='pt-3'>Мы нашли информацию, связанную с вашей учетной записью.</p>

        {/* <form onChange={this.onChange.bind(this)}> */}
          <div className='py-3'>
            <div className="form-group mb-0">
              <label>
                <input type="radio" name="radio2" defaultChecked/>{' '}
                Отправить код на мой номер телефона, заканчивающийся на <b>{getPathNumber(this.props.user.number)}</b>
              </label>
            </div>
            <div className="form-group mb-0">
              <label >
                <input type="radio" name="radio2" />{' '}
                Отправить ссылку по электронной почте <b>{getCodedEmail(this.props.user.email)}</b>
              </label>
            </div>
          </div>
          <Link to='/reset/confirm_pin' className="px-3 font-weight-bold btn btn-primary btn-radius" >Продолжить</Link>
        {/* </form> */}
        
      </div>
    )
  }
}

function ConfirmPinReset (props) {
  return (
    <div>
      <h1>Проверьте ваш телефон</h1>
      <div>
        <p>Вам отправлен код подтверждения на телефон, заканчивающийся на '<b>{getPathNumber(props.user.number)}</b>'. Введите полученный код ниже для восстановления пароля.</p>
          <form>
          <div className="form-group py-2">
            <input type="name" className="form-control btn-radius search-account" id="name" placeholder="Введите код"/>
          </div>
          <Link to='/reset/new_password_reset' className="px-3 font-weight-bold btn btn-primary btn-radius" >Отправить</Link>
        </form>
      </div>
    </div>
  )
}

export default class PageReset extends Component {
  constructor(props) {
    super()
    this.state = {
      user: {
        number: "+79788611630", 
        email: 'kykyxDD@gmail.com',
        photo: null,
        name: 'kykyxDD',
        login: 'kykyxdd'
      }
    }
  }
  renderSwitch(params) {
    switch(params){
      case 'begin_reset':
        return <BeginReset/>
      case 'send_reset':
        return <SendReset user={this.state.user}/>
      case 'confirm_pin':
        return <ConfirmPinReset user={this.state.user}/>
      case 'new_password_reset':
        return <div />
      default:
        return <BeginReset/>;
    }
  }

  render () {
    return (
      <div className="pageout pageout-reset"> 
        {this.renderSwitch(this.props.step)}
      </div>
    )
  }
}