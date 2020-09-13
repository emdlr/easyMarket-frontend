import React from "react";
import "./CreateList.css";
import Filter from "./Filter.js";
import ProductSelector from "./ProductSelector.js";

const CreateList = (props) => {
  return (
    <div className="create-list-container">
      <div className="create-list-filter-container">
        <Filter
          populateCategory={props.populateCategory}
          populateProduct={props.populateProduct}
          listHeader={props.listHeader}
        />
      </div>
      <div className="create-list-selector-container">
        <ProductSelector
          getProductsByStore={props.getProductsByStore}
          productsByStore={props.productsByStore}
          listHeader={props.listHeader}
        />
      </div>
    </div>
  );
}; // end function
export default CreateList;
