import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Header from './Header'

class Container extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: localStorage.getItem('loggedIn'),
      test: 'it is a testing'
    }
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <Redirect to='/login' />
      )
    } else if (this.props.location.pathname === '/') {
      return (
        <Redirect to='/home' />
      )
    }

    return (
      <div>
        <Header {...this.state} />
        <div className='main-layout'>
          {console.log('这里面时什么',this.props.children)}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container
