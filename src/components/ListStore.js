import React, { Component } from "react";
import "./ListStore.css";
import { Link } from "react-router-dom";

// It renders the component to select the store and put a name to the list name
// It calls the create list react route to proceed with the selection of products
// and the creation of the preview list
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
        <input
          id="listName"
          type="text"
          name="listName"
          onChange={this.props.handleCreateListButton}
        ></input>
        <Link to="/CreateList">
          <button
            type="button"
            onClick={() => {
              this.props.getListHeader();
            }}
            disabled={!this.props.listName.length}
          >
            Create list
          </button>
        </Link>
      </div>
    );
  } // End render
} // End class

export default ListStore;
