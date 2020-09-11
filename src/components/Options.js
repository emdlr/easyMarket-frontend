import React from "react";
import "./Options.css";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="options-container">
      <div className="options-row-1">
        <Link to="/" className="option">
          Stores
        </Link>
        <Link to="/" className="option">
          Products
        </Link>
        <Link to="/" className="option">
          Categories
        </Link>
      </div>
      <div className="options-row-2">
        <Link to="/" className="option">
          Units
        </Link>
        <Link className="option" to="/List">
          Create list
        </Link>
        <Link to="/" className="option">
          Pick list
        </Link>
      </div>
    </div>
  );
};

export default Options;
