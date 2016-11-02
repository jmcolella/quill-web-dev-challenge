import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import StageOneForm from './StageOneForm';
import StageTwoForm from './StageTwoForm';
import './App.css';

class App extends Component {
  render() {
    const { store, initial, change } = this.props;
    let render;
    if ( initial.stageOne ) {
      render =
        <StageOneForm
          store={ store }/>
    } else {
      render =
        <StageTwoForm
          store={ store }
          initial={ initial }
          change={ change } />
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
    initial: state.initial,
    change: state.change
  }
};

export default connect(
  mapStateToProps
)(App);
