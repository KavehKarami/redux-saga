// Phase 04

import { takeLatest } from 'redux-saga/effects';
import { handlerGetUsers } from './handlers/users.js';
import { GET_USERS } from '../reducers/users.js';

export function* watcherSaga() {
  yield takeLatest(GET_USERS, handlerGetUsers);
}
