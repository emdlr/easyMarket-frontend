import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  // In case we want to implement filtering by categories
  componentDidMount() {
    //  this.props.populateCategory();
  }

  // Header of the create list
  // It show the store and the list name
  render() {
    return (
      <div>
        <div className="filter-list-data">
          <p>{"Store: " + this.props.listHeader.storeName}</p>
          <p>{"List Name: " + this.props.listHeader.listName}</p>
        </div>
      </div>
    );
  }
}

export default Filter;
