import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import defaultProfile from './../../../images/default_profile_normal.png';

class CreateNewPassword extends Component {
  constructor(props ) {   
    super(props);
    this.state = {
      actionSubmit: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleRepeatPassword = this.handleRepeatPassword.bind(this)
    this.getStyle = {
      backgroundImage: `url(${this.getImagePhoto()})`
    }
  }
  getImagePhoto() {
    return this.props.user.photo ? this.props.user.photo : defaultProfile;
  }
  onSubmit(){
    this.props.history.push('/reset/done_new_password')
  }
  handlePassword(){
    var val = this.refs.new_password.value;
    console.log('new_password', val)
  }
  handleRepeatPassword(){
    var password = this.refs.new_password.value;
    var repeat_password = this.refs.repeat_password.value;
    this.setState({actionSubmit: password === repeat_password})
  }
  render () {
    return (
      <div>
        <h1>Сброс пароля</h1>

        <div className="d-flex pt-4">
          <div className="icon" style={this.getStyle}>
          </div>
          <div className="pl-3 info_searched_user">
            <div className="font-weight-bold">{this.props.user.name}</div>
            <div className="text-muted">@{this.props.user.login}</div>
          </div>
        </div>
        <p className="pt-3">Надёжные пароли содержат буквы, цифры и знаки препинания.</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group mb-1">
            <p className='font-weight-bold mb-0'>Введите ваш новый пароль</p>
            <label className="w-50">
              <input type="password" className="form-control btn-radius" name="new_password" ref="new_password" onChange={this.handlePassword}/>
            </label>
          </div>
          <div className="form-group mb-0">
            <p className='font-weight-bold mb-0'>Введите ваш новый пароль еще раз</p>
            <label  className="w-50">
              <input type="password" className="form-control btn-radius" name="repeat_password" ref="repeat_password" onChange={this.handleRepeatPassword}/>
            </label>
          </div>
          <div className="mb-3">
            <label>
              <input type="checkbox" /> Запомнить
            </label>
          </div>
          <div><button type="submit" className="px-3 font-weight-bold btn btn-primary btn-radius" disabled={!this.state.actionSubmit}>Отправить</button></div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
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
