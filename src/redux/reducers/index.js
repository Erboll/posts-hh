import { combineReducers } from "redux";
import userDetails from "./userDetails";
import posts from "./posts";
import postOfUsers from "./postsOfUser";
import comments from "./comments";

const reducer = combineReducers({
  posts,
  userDetails,
  postOfUsers,
  comments,
});

export default reducer;
