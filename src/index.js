import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"
import './assets/css/index.css';
import App from './App';
import dashboardApp from "./store"
import * as serviceWorker from './serviceWorker';

const sagaMw = createSagaMiddleware()

const store = createStore(dashboardApp, applyMiddleware(sagaMw))

sagaMw.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
