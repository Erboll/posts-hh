import React from "react";

const Pagination = ({
  postsPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
}) => {
  const postsNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPage); i++) {
    postsNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination p-2 justify-content-center">
        <button className="btn btn-primary me-2" onClick={previousPage}>
          Previous
        </button>
        {postsNumbers.map((number) => (
          <li className="page-item " key={number}>
            <span
              style={{ cursor: "pointer" }}
              className="page-link fs-4"
              onClick={() => paginate(number)}
            >
              {" "}
              {number}
            </span>
          </li>
        ))}
        <button className="btn btn-primary ms-2" onClick={nextPage}>
          Next
        </button>
      </ul>
    </>
  );
};

export default Pagination;
