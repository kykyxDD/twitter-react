import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profilePage } from 'actions/index';

import './userPage.scss';

import HeaderTwitter from '../Header/index';

import UserPageHeader from './Header/index';
import UserPageBody from './Body/index';


class UserPage extends Component {
  componentDidMount () {
    this.props.getProfile(this.props.match.params.name)
  }
  render () {
    return (
      <div>
        <HeaderTwitter />
        {
          this.props.loading ? 
          'load' : 
          this.props.error ? 
          'error' : 
          this.props.profile ? 
          (
            <div className="main">
              <UserPageHeader/>
              <UserPageBody profile={this.props.profile}/>
            </div>
          ) : ''
        }
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
