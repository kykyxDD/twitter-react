import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserPageHeaderNavUser from './NavUser';
import UserPageHeaderNavPage from './NavPage';

class UserPageHeader extends Component {
  constructor (props) {
    super(props);
    console.log(props)
  }
  getBannerImg(){
    return this.props.profile && this.props.profile.profile_banner_url ? this.props.profile.profile_banner_url : null
  }
  getColor(){
    return this.props.profile && this.props.profile.profile_background_color ? this.props.profile.profile_background_color : null
  }
  getAvatar(){
    return this.props.profile && this.props.profile.profile_image_url ? this.props.profile.profile_image_url.replace('normal', '400x400') : null
  }
  render () {
    const style={
      backgroundImage: `url(${this.getBannerImg()})`,
      backgroundColor: `#${this.getColor()}`
    }
    const styleAvatar={
      backgroundImage: `url(${this.getAvatar()})`,
    }
    return (
      <div>
        <div className="main-banner" style={style}>
          <div className="main-banner--avatarCont">
            <div className="main-banner--avatar" style={styleAvatar}></div>
          </div>
        </div>
        <div className="main-banner-profile">
          <div className="app-header--container d-flex ">
            <div className="profileAvatar w-25">
              <div>
              </div>
            </div>
            <div className="w-75 d-flex justify-content-between">
              <div className="d-flex">
                { 
                  this.props.isPageUser? 
                    <UserPageHeaderNavUser profile={this.props.profile}  /> : 
                    <UserPageHeaderNavPage profile={this.props.profile}/>
                }
              </div>
              <div>
                Читаю
                <div className="more"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps',state.user.id, state.stateProfile.profile)
  return {
    profile: state.stateProfile.profile,
    isPageUser: state.stateProfile.profile && state.user ? state.stateProfile.profile.id === state.user.id : false
  }
}

export default withRouter(connect(mapStateToProps, null)(UserPageHeader));