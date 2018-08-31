import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileTimeline } from 'actions/index';

class InfoTimeline extends Component {
  componentDidMount () {
    console.log(this.props)
    this.props.getTimeline(this.props.match.params.name)
  }
  componentWillReceiveProps(props){
    console.log(props.timeline)
  }
  render () {
    return (
      <div>
        {
          this.props.loading ? 
          'load' : 
          this.props.error ? 
          'error' : 
          this.props.timeline ? 
          (
            // <UserPageHeader/>
            // <UserPageBody profile={this.props.profile}/>
            <div className="">done</div> 
          ) : ''
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  // console.log('mapStateToProps',state)
  return {
    timeline: state.stateTimeline.timeline,
    loading: state.stateTimeline.loading,
    error: state.stateTimeline.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTimeline: profileTimeline.getProfileTimeline
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InfoTimeline));