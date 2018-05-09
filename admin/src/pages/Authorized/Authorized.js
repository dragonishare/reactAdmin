import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Login from '../Login/Login.js';
import Home from '../Home/Home.js';

export default class Authorized extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: localStorage.getItem('loggedIn')
        }
    }

    render() {
        if (!this.state.isLogin) {
            return (
                <Redirect to='/login' />
            );
        } else if (this.props.location.pathname === '/') {
            return (
                <Redirect to='/home' />
            );
        }

        return (
            <div className="authorized">
                <Home />
            </div>
        );
    }
}
