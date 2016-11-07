import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import StageOneForm from './Stages/StageOneForm';
import StageTwoForm from './Stages/StageTwoForm';
import StageThree from './Stages/StageThree';
import './App.css';

class App extends Component {
  render() {
    const { store, initial, change, compare } = this.props;
    let render;
    if ( initial.stageOne ) {
      render =
        <StageOneForm
          initial={ initial }
          store={ store }/>
    } else if ( compare.stageThree ) {
      render =
        <StageThree
          store={ store }
          compare={ compare } />
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
    change: state.change,
    compare: state.compare
  }
};

export default connect(
  mapStateToProps
)(App);
