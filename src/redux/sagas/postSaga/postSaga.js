import axios from "axios";
import { all, call, fork, put, spawn, takeEvery } from "redux-saga/effects";
import { LOAD_POSTS_SUCCESS, LOAD_POSTS } from "../../constants";

export function* loadPosts() {
  const data = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/posts"
  );
  yield put({ type: LOAD_POSTS_SUCCESS, payload: data.data });
}

export function* postsSaga() {
  yield takeEvery(LOAD_POSTS, loadPosts);
}
