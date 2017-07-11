// this is just to hook up redux saga and redux-logger

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';

import reducer from './reducer';
import restSaga from './restSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
);
sagaMiddleware.run(restSaga);

export default store;
