import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <p>easyMarket</p>
      <div className="header-image-container">
        <img src="/easymarket.jpg" className="header-logo" alt=""></img>
      </div>
    </div>
  );
}

export default Header;
