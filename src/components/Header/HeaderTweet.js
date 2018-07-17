import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FormCreateTweet from './../helpers/FormCreateTweet';

class HeaderTweet extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      headerModal: ['Новый твит', "Начать новую ветку"]
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render () {
    return (
      <div>
        <Button className="btn btn-primary btn-radius font-weight-bold" onClick={this.toggle}>
          Твитнуть
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-create-new-tweet'>
          <ModalHeader toggle={this.toggle}>{this.state.headerModal[0]}</ModalHeader>
          <ModalBody className='p-0'>
            <FormCreateTweet createList="false"/>
          </ModalBody>
          
        </Modal>
      </div>

    )
  }
}

const mapStateToProps = state => {
  console.log(state.user)
  return {
    user: state.user,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProfile: name => {
//       dispatch(profilePage.getProfilePage(name))
//     }
//   }
// }

export default withRouter(connect(mapStateToProps)(HeaderTweet));
