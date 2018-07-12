import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './App.scss';
import Welcome from './components/Welcome/index.js';
import Signup from './components/Auth/Signup/index.js';
import Login from './components/Auth/Login/index.js';
import Reset from './components/Auth/Reset/index.js';

// import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';
import Twitter from 'twitter';
import { configTwitter } from './helper/configTwitter.js';

import rootReducer from "./reducers";

let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/signup' component={Signup}  />
              <Route path='/login' component={Login}    />
              <Route path='/reset/:stepReset' component={Reset} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;