import axios from "axios";
import { all, call, fork, put, spawn } from "redux-saga/effects";
import { SET_POSTS } from "../constants";

export function* loadPosts() {
  const data = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/posts"
  );
  yield put({ type: SET_POSTS, payload: data.data });
}

export function* sagaWatcher() {
  yield fork(loadPosts);
}

export default function* rootSaga() {
  const sagas = [loadPosts];

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  });
  yield all(retrySagas);
}
