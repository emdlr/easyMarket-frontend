import React from "react";
import "./Main.css";
import Options from "./Options.js";

// Ir renders the Options component
const Main = (props) => {
  return (
    <div className="main">
      <Options userId={props.userId} />
    </div>
  );
};
export default Main;