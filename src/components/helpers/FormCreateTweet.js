import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultDataMessage } from 'helper/configConst'; 
import CreateTweet from './CreateTweet';
// import { Button } from 'reactstrap';
import CreateTweetAddMessSubmit from './CreateTweet__addMess__Submit';

class FormCreateTweet extends Component {
  constructor (props) {
    super(props)
    this.state= {
      listMessage: []
    }
    this.addMessage = this.addMessage.bind(this)
  }
  componentDidMount (props) {
    if(props !==  this.props) {
      console.log(props)
    }
    this.addMessage(true)
  }
  addMessage () {
    let listMessage = this.state.listMessage.map(obj => {
      obj.noLast = true
      obj.isFocus = false
      return obj
    })
    let new_message = {...defaultDataMessage}
    new_message.isFocus = true
    new_message.noLast = this.state.listMessage.length > 0
    console.log(new_message)
    listMessage.push(new_message)

    this.setState({listMessage: listMessage })
    
  }
  onFocusMessage (index) {
    let listMessage = this.state.listMessage.map((obj, key) => {
      obj.isFocus = index === key
      return obj
    })
    this.setState({ listMessage: listMessage })
  }
  onDeleteMessage (index) {
    this.state.listMessage.splice(index, 1)
    let listMessage = this.state.listMessage
    if(listMessage.length === 1 ){
      listMessage[0].noLast = false
    }
    this.setState({ listMessage: listMessage })
  }
  onSublitNewTweet () {
    
  }
  getClassFooter(){
    return (this.state.listMessage.length <= 1 ? 'd-none' : '')
  }
  render (){
    return (
      <div>
        <div className="form-create-tween">

          {this.state.listMessage.map((obj, index) => {
            
            return <CreateTweet 
                    key={`newmessage_${index}`} 
                    user={this.props.user} 
                    objMessage={obj}
                    isCreateNewMessage={this.props.isCreateNewMessage}
                    onFocusMessage={this.onFocusMessage.bind(this, index)} 
                    onDeleteMessage={this.onDeleteMessage.bind(this, index)}
                    onAddMess={this.addMessage}
                    onSublitNewTweet={this.onSublitNewTweet.bind(this)}/>
          })}
        </div>
        <div className={this.getClassFooter()}>
          <div className="d-flex justify-content-end px-3 py-2 ">
            <CreateTweetAddMessSubmit 
            onAddMess={this.addMessage}
            addMess={this.props.isCreateNewMessage}
            text={'Твитнуть все'} 
            onSublitNewTweet={this.onSublitNewTweet.bind(this)}/>
            {/* <Button outline color="primary" className="btn-radius"  >+</Button>
            <Button color="primary" className="btn-radius ml-3" >Твитнуть{ this.state.listMessage.length > 1 ? ' всем' : ''}</Button> */}
          </div>
        </div>
      </div>
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