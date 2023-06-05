import React, { useState } from "react";
import { useDispatch } from "react-redux";
import filterPostByTitle from "../../redux/reducers/filterPostsAction";

const SearchInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(filterPostByTitle(title.trim()));
  };
  const handleReset = () => {
    setTitle("");
    dispatch(filterPostByTitle(""));
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {title && (
          <button
            className="btn btn-secondary me-2 ms-2"
            type="button"
            onClick={handleReset}
          >
            X
          </button>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchInput;
