import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickSaga } from "../../redux/actions/actions";
import { LOAD_POSTS } from "../../redux/constants";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_POSTS });
  }, [dispatch]);

  console.log(posts);
  return (
    <div>
      <div>
        {posts ? (
          posts.map((post) => <p key={post.id}>{post.title}</p>)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Home;
