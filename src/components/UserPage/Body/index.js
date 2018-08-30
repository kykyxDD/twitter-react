import React, {Component} from 'react';
// // import {bindActionCreators} from 'redux'
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { profilePage } from 'actions/index';
import InfoAccount from "./InfoAccount"


class UserPageBody extends Component {
  // constructor () {
  //   // console.log(this.props)
  //   // this.props.getProfile(this.props.match.params.name)
  // }
  constructor (props) {
    super(props);
    console.log(props)
  }
  render () {
    return (
      <div className="app-header--container" >
        <div className="w-25">
        {
          this.props && this.props.profile ? <InfoAccount profile={this.props.profile}/> : ''
        }
        </div>
        <div className="w-50">
        </div>
        <div className="w-25">
        </div>
      </div>
    )
  }
}


export default (UserPageBody);