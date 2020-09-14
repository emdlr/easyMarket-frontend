import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
<<<<<<< HEAD
      <Link to="/" className="headText">easyMarket</Link>
      <img src="/easymarket.jpg" className="header-logo"></img>
=======
      <Link to="/" className="headText">
        easyMarket
      </Link>
      <div className="header-image-container">
        <img src="/easymarket.jpg" className="header-logo" alt=""></img>
      </div>
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
    </div>
  );
}

export default Header;
