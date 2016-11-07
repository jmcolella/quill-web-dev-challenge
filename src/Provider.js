import React, { Component } from 'react';
import { connect } from 'react-redux';

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  render() {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

export default connect()( Provider );