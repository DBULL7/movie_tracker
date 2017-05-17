import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import AppContainer from './components/AppContainer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer,devTools);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}/>
    </Router>
  </Provider>
  , document.getElementById('main')
)
