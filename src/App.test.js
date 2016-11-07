import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { passageApp } from './reducers/app_reducers';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={ createStore( passageApp ) }>
      <App />
    </Provider>,
    div
  );
});
