// src/sagas/index.js

import { takeEvery, call, put } from "redux-saga/effects"
import { FETCH_USER, RECEIVE_USER, REQEUST_USER } from "../store/user"
import { fetchUserApi } from "../api"

export function* takeFetchUser() {
  yield takeEvery(FETCH_USER, fetchUserAsync)
}

function* fetchUserAsync(action) {
  yield put({ type: REQEUST_USER })
  const users = yield call(fetchUserApi)
  yield put({ type: RECEIVE_USER, users })
}

export default function* rootSaga() {
  yield [takeFetchUser()]
}