import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickSaga } from "../../redux/actions/actions";

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  console.log(posts);
  return (
    <div>
      <div>
        {posts.map((post) => (
          <p>{post.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
