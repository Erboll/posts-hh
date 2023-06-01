import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
} from "../constants";

const initial = {
  loading: false,
  data: null,
  error: null,
};

const comments = (state = initial, action) => {
  switch (action.type) {
    case LOAD_COMMENTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_COMMENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case LOAD_COMMENTS_ERROR: {
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

export default comments;
