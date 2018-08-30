
import React, {Component} from 'react';
// import {bindActionCreators} from 'redux'
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { profilePage } from 'actions/index';


class InfoAccount extends Component {
  constructor (props) {
    super(props)
    console.log('InfoAccount',props)
    // this.props.getProfile(this.props.match.params.name)
  }
  render () {
    return (
      <div className="" >
        {this.props.profile.name}<br/>
        @{this.props.profile.screen_name}<br/>
        {this.props.profile.description}<br/>
        {this.props.profile.location}
      </div>
    )
  }
}


export default InfoAccount