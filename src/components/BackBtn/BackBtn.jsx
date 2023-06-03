import React from "react";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")} className="btn btn-secondary m-3">
        Back
      </button>
    </div>
  );
};

export default BackBtn;
