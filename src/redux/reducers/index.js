import { combineReducers } from "redux";
import click from "./click";
import posts from "./posts";

const reducer = combineReducers({
  click,
  posts,
});

export default reducer;
