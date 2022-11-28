import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { error } = useSelector((state) => state.book);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <>
      {error && (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => {
            navigate("/add") && isLoggedIn;
          }}
        >
          {isLoggedIn ? "Add Book" : "Login"}
        </button>
      </nav>
    </>
  );
};

export default Header;
