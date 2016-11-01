import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import StageOneForm from './StageOneForm';
import './App.css';

class App extends Component {
  render() {
    const { store, initial } = this.props;
    let render;
    if ( initial.stageOne ) {
      render =
        <StageOneForm
          store={ store }/>
    } else {
      render =
        <p>Stage Two</p>
    }
    return (
      <div className="App">
        <AppHeader />
        { render }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initial: state.initial
  }
};

export default connect(
  mapStateToProps
)(App);
