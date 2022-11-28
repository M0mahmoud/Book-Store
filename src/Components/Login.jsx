import React from "react";
import { useDispatch } from "react-redux";
import { logInOut } from "../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logInOut());
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="m-5 text-center">
        <div>
          <h1>Login</h1>
        </div>
        <div className="col-md-6 mb-3 mx-auto">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            required
          />
        </div>
        <div className="col-md-6 mb-3 mx-auto">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            required
          />
        </div>
        <div className="col-12 mb-3 mx-auto">
          <button type="submit" className="btn btn-primary ">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
