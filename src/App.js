import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import StageOne from './Stages/StageOne';
import StageTwo from './Stages/StageTwo';
import StageThree from './Stages/StageThree';
import './App.css';

class App extends Component {
  render() {
    const { initial, change, compare } = this.props;
    let render;
    if ( compare.stageThree ) {
      render =
        <StageThree
          compare={ compare } />
    } else if ( change.stageTwo ) {
      render =
        <StageTwo
          initial={ initial }
          change={ change } />
    } else {
      render =
        <StageOne
          initial={ initial } />
    }
    return (
      <div className="App">
        <AppHeader />
        { render }
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};

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
