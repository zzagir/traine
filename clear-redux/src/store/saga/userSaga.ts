/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put } from "@redux-saga/core/effects";
import { FETCH_USERS, fetchUsers, setUsers } from "../userReducer";
import { takeEvery } from "redux-saga/effects";

const fetchUsersApi = () => {
  fetch("https://jsonplaceholder.typicode.com/users?_limit=10");
};

function* fetchUsersWorker() {
  const data = yield call(fetchUsersApi);
  const json = yield call(() => {
    new Promise((res) => res(data.json()));
  });
  yield put(setUsers(json));
}

export function* usersWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
