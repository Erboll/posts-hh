import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_POSTS,
  LOAD_USER_DETAILS_SUCCESS,
  LOAD_USER_DETAILS_SUCCESS_POSTS,
} from "../../constants";

export function* loadDetailsUser({ payload }) {
  try {
    const data = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/" + payload
    );
    yield put({ type: LOAD_USER_DETAILS_SUCCESS, payload: data.data });
  } catch (e) {
    console.log(e.message);
  }
}
export function* loadPostsOfUser({ payload }) {
  try {
    const data = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/" + payload + "/posts"
    );
    yield put({ type: LOAD_USER_DETAILS_SUCCESS_POSTS, payload: data.data });
  } catch (e) {
    console.log(e.message);
  }
}

export function* loadCommentsOfPosts({ payload }) {
  try {
    const data = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/commentss?postId=" + payload
    );
    yield put({ type: LOAD_COMMENTS_SUCCESS, payload: data.data });
  } catch (e) {
    console.log(e.message);
  }
}

export function* loadPosts() {
  try {
    const data = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put({ type: LOAD_POSTS_SUCCESS, payload: data.data });
  } catch (e) {
    console.log(e.message);
  }
}

export function* clickCommentSaga() {
  yield takeLatest(LOAD_COMMENTS, loadCommentsOfPosts);
}

export function* postsSaga() {
  yield takeEvery(LOAD_POSTS, loadPosts);
  yield takeEvery(LOAD_USER_DETAILS, loadDetailsUser);
  yield takeEvery(LOAD_USER_DETAILS_POSTS, loadPostsOfUser);
  yield clickCommentSaga();
}
