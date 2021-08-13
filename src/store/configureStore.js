// Phase 05

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers/users';
import { watcherSaga } from './sagas/rootSaga';
const reducers = combineReducers({
  users: userReducer
});

const sagaMiddleWare = createSagaMiddleware();

const middleWares = [sagaMiddleWare];
const store = createStore(reducers, {}, applyMiddleware(...middleWares));
sagaMiddleWare.run(watcherSaga);

export default store;
