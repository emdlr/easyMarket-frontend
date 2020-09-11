import React from "react";
import "./Options.css";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="options-container">
      <div className="options-row-1">
        <Link className="option">Stores</Link>
        <Link className="option">Products</Link>
        <Link className="option">Categories</Link>
      </div>
      <div className="options-row-2">
        <Link className="option">Units</Link>
        <Link className="option" to="/List">
          Create list
        </Link>
        <Link className="option">Pick list</Link>
      </div>
    </div>
  );
};

export default Options;
