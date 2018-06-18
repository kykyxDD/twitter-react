import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome/index.js';
import Signup from './components/Auth/Signup/index.js';
import Login from './components/Auth/Login/index.js';

class App extends Component {
  

  render() {
    return (
      <div className="App d-flex flex-column">
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;