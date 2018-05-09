import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../redux/Modules/Counter';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <div className="Home">
        <h1>Home this is a main home </h1>
      </div>
    );
  }
}

export default Home;
