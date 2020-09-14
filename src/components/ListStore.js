import React, { Component } from "react";
<<<<<<< HEAD
//import "./ListStore.css";

class ListStore extends Component {
  // constructor() {
  //   super();
  // } // End constructor

=======
import "./ListStore.css";
import { Link } from "react-router-dom";

class ListStore extends Component {
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
  componentDidMount() {
    console.log("populating stores.....");
    this.props.populateStore();
  }
  render() {
    return (
      <div className="list-store-container">
        <label htmlFor="store">Select store: </label>
        <select id="store" name="storeSelector"></select>{" "}
        <label htmlFor="list-name">List name: </label>
        <input id="listName" type="text" name="listName"></input>
<<<<<<< HEAD
        <button
          type="button"
          onClick={() => {
            this.props.getListHeader();
            this.props.setView("list-products");
          }}
        >
          Create list
        </button>
=======
        <Link to="/CreateList">
          <button
            type="button"
            onClick={() => {
              this.props.getListHeader();
              // this.props.setView("list-products");
            }}
          >
            Create list
          </button>
        </Link>
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
      </div>
    );
  } // End render
} // End class

<<<<<<< HEAD
export default ListStore;
=======
export default ListStore;
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
