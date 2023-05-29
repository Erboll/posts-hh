import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_SUCCESS,
} from "../../redux/constants";
import Spinner from "../../components/Spinner/Spinner";

const AboutUser = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.userDetails.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LOAD_USER_DETAILS, payload: id });
  }, [dispatch, id]);

  return (
    <div>
      {user ? (
        <div className="card">
          <div className="card card-body">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default AboutUser;
