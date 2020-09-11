import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav-home">
        Home
      </Link>
    </div>
  );
};

export default Nav;
