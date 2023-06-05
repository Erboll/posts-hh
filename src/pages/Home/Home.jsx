import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/Posts/Posts";
import Spinner from "../../components/Spinner/Spinner";
import { LOAD_POSTS } from "../../redux/constants";
import Pagination from "../../components/Pagination/Pagination";
import SearchInput from "../../components/SearchInput/SearchInput";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPage] = useState(10);
  const posts = useSelector((state) => state.posts.data);
  const postByFilter = useSelector((state) => state.posts.filteredTitle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_POSTS });
  }, [dispatch]);

  const lastIndex = currentPage * postsPage;
  const firstIndex = lastIndex - postsPage;
  const currentPost = posts && posts.slice(firstIndex, lastIndex);

  const previousPage = () => setCurrentPage((prev) => prev - 1);
  const nextPage = () => setCurrentPage((prev) => prev + 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <SearchInput />
      {postByFilter ? (
        postByFilter.map((filtered) => (
          <Posts key={filtered.id} post={filtered} />
        ))
      ) : posts ? (
        currentPost.map((post) => <Posts key={post.id} post={post} />)
      ) : (
        <Spinner />
      )}

      <Pagination
        postsPage={postsPage}
        totalPosts={posts && posts.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default Home;
