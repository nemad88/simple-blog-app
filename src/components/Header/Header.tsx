import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsLoggedIn } from "../../redux/auth";
import "./Header.scss";

const Header: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to={"/"} className="logo">
        BLOG
      </Link>
      {isLoggedIn ? (
        <button
          className="header-login-button"
          onClick={() => dispatch(logout())}
        >
          LOGOUT
        </button>
      ) : (
        <Link to={"/login"}>LOGIN</Link>
      )}
    </div>
  );
};

export default Header;
