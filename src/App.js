import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import './App.scss';
import Welcome from './components/Welcome/index.js';
import Signup from './components/Auth/Signup/index.js';
import Login from './components/Auth/Login/index.js';
import Reset from './components/Auth/Reset/index.js';
import UserPage from './components/UserPage/index.js';

import rootReducer from "./reducers";


function getEnhancer () {
  if(window.__REDUX_DEVTOOLS_EXTENSION__) {
    return compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
  } else { 
    return applyMiddleware(thunk) 
  }
}

let store = createStore(rootReducer, getEnhancer())

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Provider store={store}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/signup' component={Signup}  />
              <Route path='/login'  component={Login}    />
              <Route path='/reset/:stepReset' component={Reset} />
              <Route path='/userpage/:name' component={UserPage} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;