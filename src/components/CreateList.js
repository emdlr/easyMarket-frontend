import React from "react";
import "./CreateList.css";
import Filter from "./Filter.js";
import ProductSelector from "./ProductSelector.js";

const CreateList = () => {
  return (
    <div className="create-list-container">
      <div className="create-list-filter-container">
        <Filter />
      </div>
      <div className="create-list-selector-container">
        <ProductSelector />
      </div>
    </div>
  );
};
export default CreateList;
