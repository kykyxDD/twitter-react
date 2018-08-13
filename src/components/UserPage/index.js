import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profilePage } from 'actions/index';

import UserPageHeader from './UserPageHeader'

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
        <div>
        {
          this.props.loading ? 
          'load' : 
          this.props.error ? 
          'error' : 
          <UserPageHeader profile={this.props.profile}/>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    profile: state.stateProfile.profile,
    loading: state.stateProfile.loading,
    error: state.stateProfile.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProfile: profilePage.getProfilePage
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));
