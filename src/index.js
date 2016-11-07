import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { passageApp } from './reducers/app_reducers';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={ createStore( passageApp ) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
