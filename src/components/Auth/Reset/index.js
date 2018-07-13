import React, { Component } from 'react';
import ResetHeader from './Header.js';
import PageReset from './PageReset.js';
import { configTitle } from 'helper/configTitle.js';

export default class Reset extends Component {
 
  componentWillMount(){
    document.title = configTitle.reset
  }

  render () {  
    return (
      <div>
        <ResetHeader/>
        <PageReset step={this.props.match.params.stepReset}/>
      </div>
    )
  }
}