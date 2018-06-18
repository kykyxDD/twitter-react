import React, { Component } from 'react';
import { Button, Modal,  ModalBody } from 'reactstrap';

class ModelSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      modal: true,
      isPhone: true
    };

    this.toggle = this.toggle.bind(this);
    this.stepNext = this.stepNext.bind(this);
    this.stepPrev = this.stepPrev.bind(this);
    this.phoneOrEmail = this.phoneOrEmail.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  stepNext() {
    this.setState({
      step: 2
    });
  }

  stepPrev() {
    this.setState({
      step: 1
    });
  }
  phoneOrEmail() {
    this.setState({
      isPhone: !this.state.isPhone
    })
  }

  render() {
    const externalCloseBtn = <button className="close d-none">&times;</button>;
    const btnStep1 =  <Button className='btn-radius py-0' onClick={this.stepNext}>Далее</Button>
    const btnStep2 =  <div onClick={this.stepPrev} className="cursor-pointer">
                        <i className="fas fa-arrow-left text-primary"></i>
                      </div>
    return (
      <div>
        <Modal isOpen={this.state.modal} centered={true} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>

          <ModalBody>
            <div className={'h-100 d-flex align-items-center ' + (this.state.step === 1 ? 'flex-row' : 'flex-row-reverse')}>
              <i className="fab fa-twitter text-primary mx-auto fa-lg"></i>
              { this.state.step === 1 ? btnStep1 : btnStep2 }              
            </div>
            <div>
              <h5 className="font-weight-bold">Создайте учетную запись </h5>
              <input type='text' placeholder="Имя" /> 
              { this.state.isPhone ? (
                <input type='text' placeholder="Телефон" /> 
              ) : (
                <input type='email' placeholder="E-mail" />
              ) }
              <span onClick={this.phoneOrEmail}>Использовать {this.state.isPhone ? 'эл. почту' : 'телефон'}</span>
            </div>
          </ModalBody>
          
          
        </Modal>
      </div>
    )
  }
}
export default ModelSignup;