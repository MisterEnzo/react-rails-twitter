import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Main from '../components/Main';
import reducers from '../reducers';


document.addEventListener('DOMContentLoaded', () => {
  const createStoreWithMiddleware = applyMiddleware()(createStore);
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Main />
    </Provider>
    , document.querySelector("#twitter")
  )
});

console.log("balblala");
