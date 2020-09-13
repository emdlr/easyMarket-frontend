import React, { Component } from "react";
import "./ListStore.css";

class ListStore extends Component {
  // constructor() {
  //   super();
  // } // End constructor

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
        <button
          type="button"
          onClick={() => {
            this.props.getListHeader();
            this.props.setView("list-products");
          }}
        >
          Create list
        </button>
      </div>
    );
  } // End render
} // End class

export default ListStore;
