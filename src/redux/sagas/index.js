import { all, spawn } from "redux-saga/effects";
import { postsSaga } from "./postSaga/postSaga";

export default function* rootSaga() {
  const sagas = [postsSaga];
  yield all(sagas.map((s) => spawn(s)));
}
