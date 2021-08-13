// Phase 03

import { call, put } from 'redux-saga/effects';
import { requestGetUsers } from '../requests/users.js';
import { setUsers } from '../../reducers/users.js';

export function* handlerGetUsers(action) {
  try {
    const response = yield call(requestGetUsers);
    const { data } = response;
    yield put(setUsers(data));
  } catch (e) {
    console.log(e);
  }
}
