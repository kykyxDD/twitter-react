import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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

function SendReset() {
  return (
    <div>
      <h1>Как вы хотите сбросить пароль</h1>

      <p className='pt-3'>Мы нашли информацию, связанную с вашей учетной записью.</p>

      <Form onChange="">
        <div className='py-3'>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio2" checked/>{' '}
            Отправить код на мой номер телефона, заканчивающийся на <b>30</b>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio2" />{' '}
            Отправить ссылку по электронной почте <b>ky***@g****.***</b>
          </Label>
        </FormGroup>
        </div>
        <Button to='/reset/send_reset' className="px-3 font-weight-bold btn btn-primary btn-radius" >Продолжить</Button>
      </Form>
      
    </div>
  )
}

export default class PageReset extends Component {
  renderSwitch(params) {
    switch(params){
      case 'begin_reset':
        return <BeginReset/>
      case 'send_reset':
        return <SendReset/>
      default:
        return 'foo';
    }
  }

  render () {
    return (
      <div className="pageout"> 
        {this.renderSwitch(this.props.step)}
      </div>
    )
  }
}