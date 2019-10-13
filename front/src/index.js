import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
// import './css/style.scss';
import './css/styles.scss';
import App from './App';
import models from './models';
import * as serviceWorker from './serviceWorker';

const store = init({
  models,
  redux: {
    reducers: models
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
