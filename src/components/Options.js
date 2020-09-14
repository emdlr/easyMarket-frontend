import React from "react";
import "./Options.css";
import { Link } from "react-router-dom";

const Options = (props) => {
<<<<<<< HEAD
=======
  console.log("props.user-id", props.userId);
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
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
<<<<<<< HEAD
        <Link className="option" to="/CreateList">
=======
        {/* <Link className="option" to="/CreateList">
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
          Create list
        </Link> */}
        <Link className="option" to="/SelectStore">
          Create list
        </Link>

        <Link
          to={props.userId ? `/user/${props.userId}` : ""}
          className="option"
        >
          Pick list
        </Link>
<<<<<<< HEAD
        <Link to={props.userId?`/user/${props.userId}`:""} className="option" >{/*emdlr*/}
          Pick list
        </Link>
=======
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
      </div>
    </div>
  );
};

export default Options;