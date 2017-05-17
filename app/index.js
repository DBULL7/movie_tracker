import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import { configureStore } from './configureStore'
import App from './components/app';
import AppContainer from './components/AppContainer';
import { apiCall } from './actions/index'

const store = configureStore();

store.dispatch(apiCall())

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}/>
    </Router>
  </Provider>
  , document.getElementById('main')
)
