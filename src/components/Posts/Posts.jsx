import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOAD_COMMENTS } from "../../redux/constants";
import UserImg from "./UserImg.png";

const Posts = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.data);
  const getComments = () => {
    dispatch({ type: LOAD_COMMENTS, payload: post.id });
    setShowComments((prev) => !prev);
  };

  return (
    <>
      <div className="card card-body  mt-5" key={post.id}>
        <Link to={"/about-user/" + post.id} style={{ width: "90px" }}>
          <img src={UserImg} alt={post.title} className="img-fluid" />
        </Link>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={getComments} className="btn btn-primary">
          Comments
        </button>
        {showComments && (
          <div>
            {comments &&
              comments.map((com) => (
                <div key={com.id} className="card card-body mt-3">
                  <h4>{com.email}</h4>
                  <p className="mt-2">{com.name}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Posts;
