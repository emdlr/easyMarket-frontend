import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="headText">
        easyMarket
      </Link>
      <div className="header-image-container">
        <img src="/easymarket.jpg" className="header-logo" alt=""></img>
      </div>
    </div>
  );
}

export default Header;
