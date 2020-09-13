import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link
        to="/"
        className="nav-home"
        onClick={() => {
          props.setView("");
        }}
      >
        Home
      </Link>
    </div>
  );
};

export default Nav;
