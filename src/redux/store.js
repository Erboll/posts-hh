import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const composeFunc =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

const configureStore = () =>
  createStore(
    reducer,
    initialState,
    composeFunc(applyMiddleware(sagaMiddleware))
  );

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;
