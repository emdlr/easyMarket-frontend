import React from "react";
import "./Options.css";
import { Link } from "react-router-dom";

// It displays the options of the application with the routes for each of them
// At this moment only create list and pick list are functional and the scope
const Options = (props) => {
  return (
    <div className="options-container">
      <div className="options-row-1">
        <Link to="/" className="option">
          <img src="/store.png" alt="" className="option-image-disabled" />
          Stores
        </Link>
        <Link to="/" className="option">
          <img src="/product.png" alt="" className="option-image-disabled" />
          Products
        </Link>
        <Link to="/" className="option">
          <img src="/category.png" alt="" className="option-image-disabled" />
          Categories
        </Link>
      </div>
      <div className="options-row-2">
        <Link to="/" className="option">
          <img src="/unit.png" alt="" className="option-image-disabled" />
          Units
        </Link>
        <Link className="option" to={props.userId ? "/SelectStore" : ""}>
          <img src="/create-list.png" alt="" className="option-image" />
          Create list
        </Link>

        <Link
          to={props.userId ? `/user/${props.userId}` : ""}
          className="option"
        >
          <img src="/pick-list.png" alt="" className="option-image" />
          Pick list
        </Link>
      </div>
    </div>
  );
};

export default Options;
