import React, { Component } from "react";
import "./ListStore.css";
import { Link } from "react-router-dom";

class ListStore extends Component {
  componentDidMount() {
    this.props.populateStore();
  }
  render() {
    return (
      <div className="list-store-container">
        <label htmlFor="store">Select store: </label>
        <select id="store" name="storeSelector"></select>{" "}
        <label htmlFor="list-name">List name: </label>
        <input id="listName" type="text" name="listName"></input>
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
      </div>
    );
  } // End render
} // End class

export default ListStore;
