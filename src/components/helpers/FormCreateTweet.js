import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormCreateTweet extends Component {
  // constructor (props) {
  //   super(props)
  // }
  render (){
    return (
      <div className="form-create-tween"> </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state',state)
  return {
    user: state.user,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProfile: name => {
//       dispatch(profilePage.getProfilePage(name))
//     }
//   }
// }

export default connect(mapStateToProps)(FormCreateTweet);