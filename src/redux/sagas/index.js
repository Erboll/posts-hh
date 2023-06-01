import { all, spawn, takeEvery } from "redux-saga/effects";
import { postsSaga, clickCommentSaga } from "./postSaga/postSaga";

export default function* rootSaga() {
  const sagas = [postsSaga];
  yield all(sagas.map((s) => spawn(s)));
}
