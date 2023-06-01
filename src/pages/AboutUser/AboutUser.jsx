import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import {
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_POSTS,
} from "../../redux/constants";
import Posts from "../../components/Posts/Posts";

const AboutUser = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.userDetails.data);
  const posts = useSelector((state) => state.postOfUsers.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LOAD_USER_DETAILS, payload: id });
    dispatch({ type: LOAD_USER_DETAILS_POSTS, payload: id });
  }, [dispatch, id]);

  return (
    <div>
      {user ? (
        <div className="card">
          <div className="card card-body">
            <h3>
              {" "}
              Name : <i>{user.name}</i>
            </h3>
            <p>
              {" "}
              <span>E-mail : </span> <i>{user.email}</i>
            </p>
            <p>
              {" "}
              <span>User-name</span> : <i> {user.username}</i>
            </p>
            <h4 className="text-center">Posts</h4>
            {posts &&
              posts.map((post) => (
                <div key={post.id} className="card mb-4 p-3">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default AboutUser;
