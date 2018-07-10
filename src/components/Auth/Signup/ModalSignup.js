import React, { Component } from 'react';
import Compliance from './TextCompliance.js';
import { Button, Modal,  ModalBody } from 'reactstrap';

function FormInput(props) {
  return (<div className="form-input">
    <input 
      type={props.info.type} 
      value={props.info.value} 
      placeholder={props.info.name} 
      id={props.info.id} 
      disabled={ props.info.step === 2} 
      onChange={ props.info.onChange } /> 
  </div>)
}

class ModelSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      lenName: 0,
      maxLength: 50,
      modal: true,
      isPhone: true,
      disabledStep: true,
      user: {
        name: '',
        phone: '',
        email: ''
      }
    };

    this.toggle = this.toggle.bind(this);
    this.stepNext = this.stepNext.bind(this);
    this.stepPrev = this.stepPrev.bind(this);
    this.phoneOrEmail = this.phoneOrEmail.bind(this);
    this.setName = this.setName.bind(this)
    this.setPhone = this.setPhone.bind(this)
    this.setEmail = this.setEmail.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  stepNext() {
    this.setState({ step: 2 });
  }

  stepPrev() {
    this.setState({ step: 1 });
  }
  setName( event ) {
    let newState = Object.assign({}, this.state);
    newState.user.name = event.target.value
    newState.lenName = newState.user.name.length
    newState.disabledStep = this.changeValidForm()
    this.setState(newState);
  }
  setPhone( event ) {
    
    let newState = Object.assign({}, this.state);
    newState.user.phone = event.target.value
    newState.disabledStep = this.changeValidForm()
    this.setState(newState);
  }
  setEmail( event ) {
    
    let newState = Object.assign({}, this.state);
    newState.user.email = event.target.value
    newState.disabledStep = this.changeValidForm()
    this.setState(newState);
    // console.log(newState.disabledStep)
  }

  changeValidForm () {
    let regex_email =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var val_name = this.state.user.name.search(/[a-zA-Z]/ig) >= 0;
    var val_phone = this.state.user.phone.search(/[0-9]/ig) >= 0;
    var val_email = this.state.user.email.search(regex_email) >= 0;
    let val = (val_name && ((this.state.isPhone && val_phone) || (!this.state.isPhone && val_email)))
    console.log(val, val_name, val_phone, val_email)
    
    return !val
  }
  phoneOrEmail() {
    this.setState({
      isPhone: !this.state.isPhone,
      disabledStep: this.changeValidForm()
    })
  }

  render() {
    const externalCloseBtn = <button className="close d-none">&times;</button>;
    const btnStep1 =  <Button color="primary" disabled={this.state.disabledStep} className='btn-radius py-0' onClick={this.stepNext}>Далее</Button>
    const btnStep2 =  <div onClick={this.stepPrev} className="cursor-pointer">
                        <i className="fas fa-arrow-left text-primary"></i>
                      </div>
    let objInputPhone = {
      id: 'phone',
      name: 'Телефон', 
      type: 'text',
      value: this.state.user.phone,
      onChange: this.setPhone,
      step: this.state.step
    }

    let objInputEmail = {
      id: 'email',
      name: 'E-mail', 
      type: 'email',
      value: this.state.user.email,
      onChange: this.setEmail,
      step: this.state
    }

    const divPhone = <FormInput info={objInputPhone} />
    const divEmail = <FormInput info={objInputEmail} />
    const divDisated = <span onClick={this.phoneOrEmail} className='cursor-pointer text-primary'>Использовать {this.state.isPhone ? 'эл. почту' : 'телефон'}</span>
    const form_comlians = <Compliance />

    return (
      <div >
        <Modal isOpen={this.state.modal} centered={true} toggle={this.toggle} className="modal-signup" external={externalCloseBtn} >
          <ModalBody className="px-4">
            <div className={'h-100 d-flex align-items-center ' + (this.state.step === 1 ? 'flex-row' : 'flex-row-reverse')}>
              <i className="fab fa-twitter text-primary mx-auto fa-lg"></i>
              { this.state.step === 1 ? btnStep1 : btnStep2 }
            </div>
            <div className="form-signup">
              <h5 className="font-weight-bold my-4">Создайте учетную запись </h5>
              <div className="form-input">
                <input type='text' placeholder="Имя" disabled={ this.state.step === 2} onChange={ this.setName }  maxLength={this.state.maxLength} /> 
                <span className={"len_name "+ (this.state.step === 2 ? 'd-none' : '')} >{this.state.lenName}/{this.state.maxLength}</span>
              </div>
              { this.state.isPhone ? divPhone : divEmail }
              

              { this.state.step === 1 ? divDisated : form_comlians }
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
export default ModelSignup;