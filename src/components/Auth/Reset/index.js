import React, { Component } from 'react';
import ResetHeader from './Header.js';
import PageReset from './PageReset.js';
import { configTitle } from './../../../helper/configTitle.js'
// import './../auth.scss';/

export default class Reset extends Component {
  constructor (props) {
    console.log(props)
    super(props)
    
  }
  componentWillMount(){
    document.title = configTitle.reset
  }

  render ( ) {
  
    return (
      <div>
        <ResetHeader/>
        <PageReset step={this.props.match.params.stepReset}/>
      </div>
    )
  }

}
//export default  Reset;