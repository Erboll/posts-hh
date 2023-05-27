import { SET_POSTS } from "../constants";

const initial = {
  posts: [],
};

const posts = (state = initial, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    }
    default:
      return state;
  }
};

export default posts;
