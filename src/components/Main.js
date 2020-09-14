import React from "react";
import "./Main.css";
import Options from "./Options.js";

<<<<<<< HEAD
const Main = (props) => {
  return (
    <div className="main">
      <Options userId={props.userId} />{/*emdlr*/}
=======
// Ir renders the Options component
const Main = (props) => {
  return (
    <div className="main">
      <Options userId={props.userId} />
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
    </div>
  );
};
export default Main;