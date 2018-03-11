import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';

import Login from './container/Login';
import Register from './container/Register';
import reducers from './reducer';
import { counter } from './counter';
import './config';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);


