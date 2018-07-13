import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPathNumber, getCodedEmail } from 'helper/configConst';
import { users } from 'actions/index';
import { withRouter } from 'react-router-dom';
import UsetAuth from 'helper/UsetAuth';

class SendReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'phone'
    };
    this.onSubmit = this.onSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  componentWillMount() {
    this.props.resetClear()
  }
  handleOptionChange(e) {
    this.setState({selectedOption: e.target.value})
  }

  onSubmit (e) {
    console.log("onSubmit",e)
    e.preventDefault();
    this.props.resetIn(this.state.selectedOption)
    this.props.history.push('/reset/confirm_pin')
  }
  
  render () {
    return (
      <div>
        <h1>Как вы хотите сбросить пароль</h1>

        <UsetAuth user={this.props.user}/>

        <p className='pt-3'>Мы нашли информацию, связанную с вашей учетной записью.</p>

        <form onSubmit={this.onSubmit}>
          <div className='py-3'>
            <div className="form-group mb-0">
              <label>
                <input type="radio" name="reset_password" value="phone" onChange={this.handleOptionChange}  defaultChecked/>{' '}
                Отправить код на мой номер телефона, заканчивающийся на <b>{getPathNumber(this.props.user.number)}</b>
              </label>
            </div>
            <div className="form-group mb-0">
              <label >
                <input type="radio" name="reset_password" value="email" onChange={this.handleOptionChange} />{' '}
                Отправить ссылку по электронной почте <b>{getCodedEmail(this.props.user.email)}</b>
              </label>
            </div>
          </div>
          <button type='submit' className="px-3 font-weight-bold btn btn-primary btn-radius" >Продолжить</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetIn: type => {
      dispatch(users.resetPassword(type))
    },
    resetClear: () => {
      dispatch(users.resetClear())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SendReset));