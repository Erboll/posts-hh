import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  FILTER_POST,
} from "../constants";

const initial = {
  loading: false,
  data: null,
  error: null,
  filteredTitle: null,
};

const posts = (state = initial, action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        loading: true,
      };
    }

    case FILTER_POST:
      if (!action.payload) {
        return { ...state, filteredByTitle: null };
      }
      const filtered = state.data.filter((post) =>
        post.title.includes(action.payload)
      );

      return {
        ...state,
        filteredTitle: filtered,
      };
    case LOAD_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case LOAD_POSTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default posts;
