import React from "react";
import "./Main.css";
import Options from "./Options.js";

const Main = (props) => {
  return (
    <div className="main">
      <Options userId={props.userId} />{/*emdlr*/}
    </div>
  );
};
export default Main;