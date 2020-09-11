import React from "react";
import "./CreateList.css";
import Filter from "./Filter.js";
import ProductSelector from "./ProductSelector.js";

const CreateList = (props) => {
  console.log("Create List props", props.categories);
  console.log("Create List props", props.productsByStore);

  return (
    <div className="create-list-container">
      <div className="create-list-filter-container">
        <Filter
          populateCategory={props.populateCategory}
          populateStore={props.populateStore}
          populateProduct={props.populateProduct}
        />
      </div>
      <div className="create-list-selector-container">
        <ProductSelector productsByStore={props.productByStore} />
      </div>
    </div>
  );
};
export default CreateList;
