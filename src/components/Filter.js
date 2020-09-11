import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  constructor() {
    super();
  }

  populateSelect = () => {
    console.log("Populating Select...");
    // THE JSON ARRAY.
    var birds = [
      { ID: "000", Bird_Name: "All categories" },
      { ID: "001", Bird_Name: "Fruits" },
      { ID: "002", Bird_Name: "Dairy, Eggs & Cheese" },
      { ID: "003", Bird_Name: "Frozen Foods" },
    ];

    var ele = document.getElementById("stores");
    for (var i = 0; i < birds.length; i++) {
      // POPULATE SELECT ELEMENT WITH JSON.
      ele.innerHTML =
        ele.innerHTML +
        '<option value="' +
        birds[i]["ID"] +
        '">' +
        birds[i]["Bird_Name"] +
        "</option>";
    }
  };

  componentDidMount() {
    this.populateSelect();
  }

  render() {
    return (
      <div className="filter-controls">
        <div className="filter-category">
          <label htmlFor="category">Filter by category: </label>
          <select id="stores"></select> <br></br>
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
