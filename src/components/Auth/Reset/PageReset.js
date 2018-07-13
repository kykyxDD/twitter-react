import React, { Component } from 'react';
import ConfirmPinReset from './ConfirmPinReset';
import SendReset from './SendReset';
import BeginReset from './BeginReset';
import CreateNewPassword from './CreateNewPassword';
import DoneNewPassword from './DoneNewPassword';


class PageReset extends Component {
  
  renderSwitch(params) {
    switch(params){
      case 'begin_reset':
        return <BeginReset/>
      case 'send_reset':
        return <SendReset/>
      case 'confirm_pin':
        return <ConfirmPinReset />
      case 'new_password_reset':
        return <CreateNewPassword />
      case 'done_new_password':
        return <DoneNewPassword />
      default:
        return <BeginReset/>;
    }
  }

  render () {
    return (
      <div className="pageout pageout-reset"> 
        <div className="py-3 px-4">
          {this.renderSwitch(this.props.step)}
        </div>
      </div>
    )
  }
}

export default PageReset;