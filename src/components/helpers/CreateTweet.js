import React, { Component } from 'react';
import UserAvatarAuth from './UserAvatarAuth';
import ProgressRing from './ProgressRing';
import CreateTweetAddMessSubmit from './CreateTweet__addMess__Submit';

class CreateTweet extends Component {
  constructor (props) {
    console.log(props, props.isFocus)
    super(props)
    this.state = { 
      progress : 0,
      maxLength: 280,
      defaultColor: ['#23a0f2', '#ffad1f', '#e0245e'], 
      color: '#23a0f2',
      remainLen: 0,
      visRemainLen: false
    }
  }
  onChangeText () {
    const len = this.refs.textMessage.value.length
    const progress = Math.min(Math.floor((len/this.state.maxLength)*100) , 100)
    const visRemainLen = len > this.state.maxLength - 20
    const remainLen = this.state.maxLength - len;
    const color = !visRemainLen ? this.state.defaultColor[0] : 
                len <= this.state.maxLength ? this.state.defaultColor[1] : 
                this.state.defaultColor[2];

    this.setState({ progress, color, remainLen, visRemainLen })
  }
  render (){
    return (
      <div className="d-flex create-tween pb-2">
        <div className="mr-3">
          <UserAvatarAuth photo={this.props.user.profile_image_url}/>
        </div>
        <div className="w-100 ">
          <div className="create-tween--contMessage"> 
            <div className="create-tween--contText">
              <textarea rows="4" className="border-0 bg-white w-100 px-2" ref="textMessage" onFocus={this.props.onFocusMessage} onChange={this.onChangeText.bind(this)}>
              </textarea>
              <div className="lengthText--circle d-inline-flex align-items-center">
                <div className="pr-1">{this.state.remainLen}</div>
                <ProgressRing
                  radius={ 10 }
                  stroke={ 2 }
                  progress={ this.state.progress }
                  colorStroke={this.state.color}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              
            </div>
          </div>
          <div className={this.props.objMessage.isFocus ? '' : 'd-none'}>
            <div className="d-flex justify-content-between pt-3" > 
              <div className="d-flex">
                <div className="px-2">
                  <i className="far fa-image fa-lg text-primary"></i>
                </div>
                <div className="px-2">
                  <i className="far fa-image fa-lg text-primary" ></i>
                </div>
              </div>
              <div >
                {!this.props.objMessage.noLast ? <CreateTweetAddMessSubmit 
                  onAddMess={this.props.onAddMess}
                  addMess={this.props.isCreateNewMessage}
                  text={'Твитнуть'} 
                  onSublitNewTweet={this.props.onSublitNewTweet} /> : 
                    (<div className="" onClick={this.props.onDeleteMessage}>
                      <i className="far fa-trash-alt text-secondary"></i>
                    </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default CreateTweet;