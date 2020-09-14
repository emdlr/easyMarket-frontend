import React from "react";
import "./CreateList.css";
import Filter from "./Filter.js";
import ProductSelector from "./ProductSelector.js";

//RENDER TWO COMPONENTS:
//Filter: A header with the store and list name
//ProductSelector: Shows all the products by store to create the list
const CreateList = (props) => {
  console.log("CreateList PROPS.userId", props.userId);
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
<<<<<<< HEAD
=======
          userId={props.userId}
          backendUrl={props.backendUrl}
          setView={props.setView}
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
        />
      </div>
    </div>
  );
}; // end function
<<<<<<< HEAD
export default CreateList;
=======
export default CreateList;
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
