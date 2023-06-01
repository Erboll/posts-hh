import {
  LOAD_USER_DETAILS_POSTS,
  LOAD_USER_DETAILS_SUCCESS_POSTS,
  LOAD_USER_DETAILS_ERROR_POSTS,
} from "../constants";

const initial = {
  loading: false,
  data: null,
  error: null,
};

const userDetails = (state = initial, action) => {
  switch (action.type) {
    case LOAD_USER_DETAILS_POSTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_USER_DETAILS_SUCCESS_POSTS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case LOAD_USER_DETAILS_ERROR_POSTS: {
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

export default userDetails;
