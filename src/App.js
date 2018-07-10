import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome/index.js';
import Signup from './components/Auth/Signup/index.js';
import Login from './components/Auth/Login/index.js';
import Reset from './components/Auth/Reset/index.js';

// import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';
import Twitter from 'twitter';
import { configTwitter } from './helper/configTwitter.js';

class App extends Component {
  constructor() {
    super();

    // this.onFailed = this.onFailed.bind(this);
    // this.onSuccess = this.onSuccess.bind(this);
    this.client = new Twitter(configTwitter);
    console.log(this.twitter)
    // this.client.post('oauth2/token', {grant_type: 'client_credentials'}, function(error, tweet, response){
    //   console.log(response)
    // })
  }
  render() {

    return (
      <div className="App d-flex flex-column">

        <Switch>
          <Route props="state" exact path='/' component={Welcome}/>
          <Route props="state" path='/signup' component={Signup}/>
          <Route props="state" path='/login' component={Login}/>
          <Route props="state" path='/reset/:stepReset' component={Reset}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;