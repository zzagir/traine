import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
  cashReducer,
  decrementCreator,
  incrementCreator,
} from "../cashReducer";

/* eslint-disable @typescript-eslint/no-unused-vars */
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreator());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
