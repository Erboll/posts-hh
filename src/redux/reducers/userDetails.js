import {
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_SUCCESS,
  LOAD_USER_DETAILS_ERROR,
} from "../constants";

const initial = {
  loading: false,
  data: null,
  error: null,
};

const userDetails = (state = initial, action) => {
  switch (action.type) {
    case LOAD_USER_DETAILS: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_USER_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case LOAD_USER_DETAILS_ERROR: {
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
