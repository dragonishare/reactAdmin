import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Login from '../Login/Login.js';
import Authorized from '../Authorized/Authorized';

import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/login' component={Login} />
          <Authorized />
        </Switch>
      </div>
    );
  }
}

export default App;
