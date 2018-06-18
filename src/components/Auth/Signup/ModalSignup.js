import React, { Component } from 'react';
import { Button, Modal,  ModalBody } from 'reactstrap';

class ModelSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      modal: true
    };

    this.toggle = this.toggle.bind(this);
    this.stepNext = this.stepNext.bind(this);
    this.stepPrev = this.stepPrev.bind(this);
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

  render() {
    const externalCloseBtn = <button className="close d-none">&times;</button>;
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.state.modal} centered={true} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>

          <ModalBody>
            <div className={'h-100 d-flex align-items-center ' + (this.state.step === 1 ? 'flex-row' : 'flex-row-reverse')}>
              <i className="fab fa-twitter text-primary mx-auto fa-lg"></i>
              {this.state.step === 1 ? (
                <Button className='btn-radius py-0' onClick={this.stepNext}>Далее</Button>
              ) : (
                <div onClick={this.stepPrev} className="cursor-pointer">
                  <i className="fas fa-arrow-left text-primary"></i>
                </div>
              ) }
              
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          
          
        </Modal>
      </div>
    )
  }
}
export default ModelSignup;