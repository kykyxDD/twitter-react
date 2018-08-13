import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profilePage } from 'actions/index';

import HeaderTwitter from '../Header/index';

class UserPage extends Component {
  componentDidMount () {
    console.log(this.props)
    this.props.getProfile(this.props.match.params.name)
  }
  render () {
    return (
      <div>
        <HeaderTwitter/>
        <div />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    profile: state.profile,
  }
}

const mapDispatchToProps = (dispatch) => {
  // return {
  //   getProfile: name => {
  //     profilePage.getProfilePage(name)
  //   }
  // }
  return bindActionCreators({
    getProfile: profilePage.getProfilePage
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));
