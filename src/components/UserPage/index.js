import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profilePage } from 'actions/index';


import './userPage.scss';

import UserPageHeader from './Header/index';
import HeaderTwitter from '../Header/index';

class UserPage extends Component {
  componentDidMount () {
    console.log(this.props)
    this.props.getProfile(this.props.match.params.name)
  }
  render () {
    return (
      <div>
        <HeaderTwitter />
        <div className="main">
        {
          this.props.loading ? 
          'load' : 
          this.props.error ? 
          'error' : 
          <UserPageHeader/>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('mapStateToProps',state)
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
