import React from "react";
import "./CreateList.css";
import Filter from "./Filter.js";
import ProductSelector from "./ProductSelector.js";

//RENDER TWO COMPONENTS:
//Filter: A header with the store and list name
//ProductSelector: Shows all the products by store to create the list
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
          userId={props.userId}
          backendUrl={props.backendUrl}
          setView={props.setView}
        />
      </div>
    </div>
  );
}; // end function
export default CreateList;
