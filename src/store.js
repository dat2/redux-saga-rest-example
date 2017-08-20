// this is just to hook up redux saga and redux-logger

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import fetchSaga from 'redux-saga-fetch';

import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
);
sagaMiddleware.run(fetchSaga);

export default store;
