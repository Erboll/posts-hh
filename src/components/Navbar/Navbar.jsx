import React from "react";
import { Link } from "react-router-dom";
import MyImg from "./MyImg.jpg";

const Navbar = () => {
  return (
    <>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <div style={{ width: "100px" }}>
            <img src={MyImg} alt="#" className="img-fluid mb-3 bord rounded" />
          </div>
          <div className="text-white mb-2">
            Name: <i>Бетенов Ербол</i>
          </div>
          <div className="text-white mb-4">
            E-mail: <i>betenov64@mail.ru</i>
          </div>
          <h5 class="text-white h4">Posts Head Hunter</h5>
          <div>
            <Link
              className="d-block text-decoration-none text-white mb-2"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="d-block text-decoration-none text-white mb-2"
              to={"/about-user/:id"}
            >
              About user
            </Link>
            <Link
              className="d-block text-decoration-none text-white"
              to={"/about-me"}
            >
              About me
            </Link>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
