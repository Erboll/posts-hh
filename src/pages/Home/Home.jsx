import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/Posts/Posts";
import { LOAD_POSTS } from "../../redux/constants";

const Home = () => {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_POSTS });
  }, [dispatch]);

  console.log(posts);
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default Home;
