import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="headText">easyMarket</Link>
      <img src="/easymarket.jpg" className="header-logo"></img>
    </div>
  );
}

export default Header;
