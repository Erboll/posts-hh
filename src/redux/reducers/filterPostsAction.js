import { FILTER_POST } from "../constants";

const filterPostByTitle = (text) => {
  return {
    type: FILTER_POST,
    payload: text,
  };
};

export default filterPostByTitle;
