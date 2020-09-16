import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// It renders the header of the app. Also clear the list name state
function Header(props) {
  return (
    <div className="header">
      <Link
        to="/"
        className="headText"
        onClick={() => {
          props.clearListName();
        }}
      >
        <p>easy</p>
        <img src="/favicon.png" className="header-logo" alt=""></img>
        <p>Market</p>
      </Link>
    </div>
  );
}

export default Header;
