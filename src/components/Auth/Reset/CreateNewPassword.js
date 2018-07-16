import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UsetAuth from 'components/helpers/UsetAuth';

class CreateNewPassword extends Component {
  constructor(props) {   
    super(props);
    this.state = {
      reliableText: '',
      reliableRange: '',
      errorPassword: true,
      repeat_password_focus: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleRepeatPassword = this.handleRepeatPassword.bind(this)
    
    
  }
  
  onSubmit(){
    this.props.history.push('/reset/done_new_password')
  }
  checkPassword(val){
    const objPassword = this.getPasswordAndRepeat();
    const password = objPassword.password ;
    const repeat_password = objPassword.repeatPassword;
    let new_state = {...this.state}

    new_state.errorPassword = password.length < 4

    if(password.length < 4) {
      new_state.reliableText = 'Слишком короткий'
      new_state.reliableRange = ''
    } else {
      if(/[!@#$%^&*;:]/.test(password)){
        new_state.reliableText = 'Очень надежный'
        new_state.reliableRange = 'reliable_4'
      } else if(/\W/.test(password) && /\w/.test(password)){
        new_state.reliableText = 'Сложный'      
        new_state.reliableRange = 'reliable_3'
      } else if(/[0-9]/.test(password) && /[A-Za-z]/.test(password)){
        new_state.reliableText = 'Хороший'        
        new_state.reliableRange = 'reliable_2'
      } else if(/\w/.test(password)){
        new_state.reliableText = 'Простой'     
        new_state.reliableRange = 'reliable_1'
      }
    }
    
    if(new_state.repeat_password_focus){
      new_state.testPassword = password === repeat_password
    }

    this.setState(new_state)
    return
  }
  handlePassword(){
    // var val = this.refs.new_password.value;
    // console.log('new_password', val)
    this.checkPassword();
  }
  getPasswordAndRepeat(){
    return {
      password: this.refs.new_password.value,
      repeatPassword: this.refs.repeat_password.value
    }
  }
  handleRepeatPassword(){
    // var objPassword = this.getPasswordAndRepeat();
    // var password = objPassword.password ;
    // var repeat_password = objPassword.repeatPassword;
    
    this.checkPassword()
  }
  focusPassword () {
    this.setState({password_focus: true})
  }
  blurPassword () {
    this.setState({password_focus: false})
  }
  focusRepeatPassword () {
    this.setState({repeat_password_focus: true})
  }
  classRangePassword(){
    const focus = !this.state.password_focus && 'd-none';
    const val_range = this.state.reliableRange
    return `password_range ${focus} ${val_range}`
  }
  actionSubmit () {
    // console.log(this.state.errorPassword)
    return !this.state.testPassword || this.state.errorPassword
  }
  classInput(name) {
    let cl = ''
    if(name === 'repeat' && this.state.repeat_password_focus){
      cl += this.state.errorPassword ? 'error' : ''
    }
    // console.log('classInput',cl)
    return `form-control btn-radius ${cl}`
  }
  render () {
    return (
      <div>
        <h1>Сброс пароля</h1>

        <UsetAuth user={this.props.user}/>

        <p className="pt-3">Надёжные пароли содержат буквы, цифры и знаки препинания.</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group mb-1">
            <p className='font-weight-bold mb-0'>Введите ваш новый пароль</p>
            <div className="d-flex flex-wrap">
              <label className="label-create-password new">
                <input type="password" 
                        className={this.classInput('new')}
                        name="new_password" 
                        ref="new_password" 
                        onFocus={this.focusPassword.bind(this)} 
                        onBlur={this.blurPassword.bind(this)} 
                        onChange={this.handlePassword}/>
                <span className={this.classRangePassword()}></span>
              </label>
              <div className={"my-auto pl-3 "+ this.state.reliableRange}>{this.state.reliableText}</div>
            </div>
          </div>
          <div className="form-group mb-0">
            <p className='font-weight-bold mb-0'>Введите ваш новый пароль еще раз</p>
            <div className="d-flex flex-wrap">
              <label  className="label-create-password repeat">
                <input type="password" 
                className={this.classInput('repeat')} 
                name="repeat_password" 
                ref="repeat_password" 
                onFocus={this.focusRepeatPassword.bind(this)} 
                onChange={this.handleRepeatPassword}/>
              </label>
              <div className={"my-auto pl-3 " + (!this.state.repeat_password_focus ? 'd-none' : '')}>
                {this.state.testPassword ? <i className={"fas fa-check text-success " + (this.state.errorPassword && ' d-none')}></i> : 'Пароль не совпадает'}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label>
              <input type="checkbox" /> Запомнить
            </label>
          </div>
          <div><button type="submit" className="px-3 font-weight-bold btn btn-primary btn-radius" disabled={this.actionSubmit()}>Отправить</button></div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetIn: type => {
      // dispatch(users.resetPassword(type))
    },
    resetClear: () => {
      // dispatch(users.resetClear())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateNewPassword));
