import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/Posts/Posts";
import Spinner from "../../components/Spinner/Spinner";
import { LOAD_POSTS } from "../../redux/constants";

const Home = () => {
  const posts = useSelector((state) => state.posts.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_POSTS });
  }, [dispatch]);

  return (
    <div>
      {posts ? (
        posts.map((post) => <Posts key={post.id} post={post} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
