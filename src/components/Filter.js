import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.populateCategory();
    this.props.populateStore();
    this.props.populateProduct();
  }

  render() {
    return (
      <div className="filter-controls">
        <div className="filter-store">
          <label htmlFor="store">Select store: </label>
          <select
            id="store"
            onChange={this.props.populateProduct}
          ></select>{" "}
          <br></br>
        </div>
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
      </div>
    );
  }
}

export default Filter;
