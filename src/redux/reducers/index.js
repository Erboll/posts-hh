import { combineReducers } from "redux";
import userDetails from "./userDetails";
import posts from "./posts";

const reducer = combineReducers({
  posts,
  userDetails,
});

export default reducer;
