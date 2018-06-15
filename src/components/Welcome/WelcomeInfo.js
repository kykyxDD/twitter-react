import React, { Component } from 'react';
import 'style/welcome.scss';

class WelcomeInfo extends Component {
  render() {
    return (
      <div className='text-white d-flex h-100 welcome--listservice '>
        <div className='m-auto text-left'>
          <div className='welcome--itemservice'> 
            <div className='welcome--itemservice-icon'><i className="fas fa-search fa-2x"></i></div> 
            <div className='welcome--itemservice-text my-auto'> Читайте о том, что вам интересно.</div>
          </div>
          <div className='welcome--itemservice'> 
            <div className='welcome--itemservice-icon'><i className="fas fa-users fa-2x"></i></div> 
            <div className='welcome--itemservice-text my-auto'> Узнайте, что обсуждают люди.</div>
          </div>
          <div className='welcome--itemservice'> 
            <div className='welcome--itemservice-icon'><i className="far fa-comment fa-2x"></i></div> 
            <div className='welcome--itemservice-text my-auto'> Присоединяйтесь к переписке.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomeInfo;