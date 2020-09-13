import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    //  this.props.populateCategory();
    //  this.props.populateProduct();
  }

  render() {
    console.log("Filter - listHeader: ", this.props.listHeader);
    return (
      <div>
        <div className="filter-list-data">
          <label>Store:</label>
          <h5>{this.props.listHeader.storeName}</h5>
          <label>List: </label>
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
