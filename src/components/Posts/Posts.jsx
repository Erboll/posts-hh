import React from "react";
import Spinner from "../Spinner/Spinner";
import UserImg from "./UserImg.png";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <>
      {" "}
      <div className="card">
        {posts ? (
          posts.map((post) => (
            <div className="card card-body  mt-5" key={post.id}>
              <Link to={"/about-user/" + post.id} style={{ width: "90px" }}>
                <img src={UserImg} alt={post.title} className="img-fluid" />
              </Link>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default Posts;
