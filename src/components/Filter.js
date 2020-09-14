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
    console.log("Filter - listHeader: ", this.props.listHeader);
    return (
      <div>
        <div className="filter-list-data">
          <p>{this.props.listHeader.storeName}</p>
          <p> /</p>
          <p>{this.props.listHeader.listName}</p>
        </div>
        {/* <div className="filter-controls">
          <div className="filter-category">
            <label htmlFor="category">Filter by category: </label>
            <select id="category"></select> <br></br>
          </div>
          <div className="filter-search">
            <label htmlFor="search" id="search-label">
              Search: &nbsp;
            </label>
            <input type="search"></input>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Filter;