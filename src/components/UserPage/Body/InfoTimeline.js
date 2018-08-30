import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profilePage } from 'actions/index';

class InfoTimeline extends Component {
  componentDidMount () {
    this.props.getTimeline(this.props.match.params.name)
  }
  render () {
    return (
      <div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  // console.log('mapStateToProps',state)
  return {
    timeline: state.stateProfile.timeline,
    loadingTimeline: state.stateProfile.loadingTimeline,
    errorTimeline: state.stateProfile.errorTimeline
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProfile: profilePage.getProfileTileline
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InfoTimeline));