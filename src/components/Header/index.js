import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderTweet from './HeaderTweet';
import HeaderUser from './HeaderUser';
import HeaderSearch from './HeaderSearch';

export default class HeaderTwitter extends Component {
  render () {
    return (
      <div className="header">
        <div className="app-header--container">
          <div className="d-flex justify-content-between">
            <div>
              <HeaderMenu />
            </div>
            
            <div className="d-flex align-items-center pr-2">
              <HeaderSearch />
              <HeaderUser />
              <HeaderTweet />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
