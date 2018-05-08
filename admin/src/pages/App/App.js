import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import RouteWithSubRoutes from '../../common/RouteWithSubRoutes.js';
import NotFound from '../error/NotFound.js'
import Login from '../login/Login.js'
import Container from '../container/Container.js'
import Home from '../container/Home.js'
import Goods from '../asideContainer/Goods.js'
import List from '../goods/List.js'
import Brand from '../goods/Brand.js'

import "./App.css";

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/goods',
    component: Goods,
    children: [
      {
        path: '/goods/list',
        component: List
      },
      {
        path: '/goods/brand',
        component: Brand
      }
    ]
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/login' component={Login} />
          <Container>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Switch>
      </div>
    );
  }
}

export default App;
