import axios from "axios";
import { call, fork, put, select, takeEvery } from "redux-saga/effects";
import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_SUCCESS,
} from "../../constants";

export function* loadDetailsUser({ payload }) {
  const data = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/users/" + payload
  );
  yield put({ type: LOAD_USER_DETAILS_SUCCESS, payload: data.data });
}

export function* loadPosts() {
  const data = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/posts"
  );
  yield put({ type: LOAD_POSTS_SUCCESS, payload: data.data });
}

export function* postsSaga() {
  yield takeEvery(LOAD_POSTS, loadPosts);
  yield takeEvery(LOAD_USER_DETAILS, loadDetailsUser);
}
