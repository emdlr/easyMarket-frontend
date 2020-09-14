import React, { Component } from "react";
import ListPreview from "./ListPreview.js";
import "./ProductSelector.css";

//const ProductSelector = (props) => {
class ProductSelector extends Component {
  constructor() {
    super();
    this.state = {
      listPreview: [],
    };
    this.tmpArray = [];
    this.total = 0.0;
  }

  componentDidMount() {
    this.props.getProductsByStore();
  }

  // Method to handle the change on QUantity field
  handleChange = (e) => {
    // Get html elements for manipulation
    const htmlParentNode = document.getElementById(e.target.id).parentNode.id;
    const htmlSubmitButton = document.getElementById(
      `buttonSelect${htmlParentNode}`
    );
    const htmlProductPrice = document.getElementById(
      `productPrice${htmlParentNode}`
    );
    const htmlCost = document.getElementById(`cost${htmlParentNode}`);
    const htmlProductStatus = document.getElementById(
      `productStatus${htmlParentNode}`
    );
    const htmlButtonSelect = document.getElementById(
      `buttonSelect${htmlParentNode}`
    );

    // Evaluate if there is quantity or not
    if (
      e.target.value === null ||
      e.target.value <= 0 ||
      e.target.value === ""
    ) {
      // If there is not quantity: Disable button, clean related fields and remove className to return the button to the default styling
      htmlSubmitButton.disabled = true;
      htmlCost.value = "";
      htmlProductStatus.value = "";
      htmlButtonSelect.classList.remove("button-product-checked");
    } else {
      // If there is quantity: Enable button and calculate cost
      htmlSubmitButton.disabled = false;
      htmlCost.value = htmlProductPrice.value * e.target.value;
    }
  }; // End handleChange

  // METHOD TO HANDLE THE BUTTON BEHAVIOR
  handleButton = (e) => {
    // Get html elements for manipulation
    const htmlParentNodeId = document.getElementById(e.target.id).parentNode.id;
    const htmlProductCost = document.getElementById(`cost${htmlParentNodeId}`);
    const htmlProductStatus = document.getElementById(
      `productStatus${htmlParentNodeId}`
    );
    const htmlButtonSelect = document.getElementById(
      `buttonSelect${htmlParentNodeId}`
    );

    // If cost is valid then we can move forward
    if (htmlProductCost.value !== "") {
      // Checking the current status of the product if it is checked or unchecked
      if (
        htmlProductStatus.value === "" ||
        htmlProductStatus.value === "Unchecked"
      ) {
        // if it is not checked then handle the check styling (putting color green and Uncheck legend in button)
        htmlProductStatus.value = "Checked";
        htmlButtonSelect.innerText = "Uncheck";
        htmlButtonSelect.classList.add("button-product-checked");
      } else if (htmlProductStatus.value === "Checked") {
        // if it is checked then handle the uncheck styling (removing color green and putting Check legend in button)
        htmlProductStatus.value = "Unchecked";
        htmlButtonSelect.innerText = "Check";
        htmlButtonSelect.classList.remove("button-product-checked");
      }
    }
  };

  // METHOD TO INSERT A PRODUCT IN THE PREVIEW LIST
  insertProduct = (e) => {
    let tempObj = {};
    // Getting html components for manipulation
    const htmlParentNodeId = document.getElementById(e.target.id).parentNode.id;
    const htmlProductId = document.getElementById(
      `productId${htmlParentNodeId}`
    );
    const htmlUserId = document.getElementById(`userId${htmlParentNodeId}`);
    const htmlListName = document.getElementById(`listName${htmlParentNodeId}`);
    const htmlProductDescription = document.getElementById(
      `productDescription${htmlParentNodeId}`
    );
    const htmlProductQuantity = document.getElementById(
      `quantity${htmlParentNodeId}`
    );
    const htmlProductCost = document.getElementById(`cost${htmlParentNodeId}`);
    const htmlProductStatus = document.getElementById(
      `productStatus${htmlParentNodeId}`
    );
    const htmlImageURL = document.getElementById(`imageURL${htmlParentNodeId}`);
    const htmlTotal = document.getElementById("list-preview-total");

    // If there is a cost that means we are OK to insert the product in the preview list
    if (htmlProductCost.value !== "") {
      // Creting an object with the data of the product
      tempObj["productId"] = htmlProductId.value;
      tempObj["userId"] = htmlUserId.value;
      tempObj["productStatus"] = htmlProductStatus.value;
      tempObj["listName"] = htmlListName.value;
      tempObj["productDescription"] = htmlProductDescription.value;
      tempObj["quantity"] = htmlProductQuantity.value;
      tempObj["cost"] = htmlProductCost.value;
      tempObj["pickedStatus"] = "false";
      tempObj["imageURL"] = htmlImageURL.value;
      // Updating preview list total
      this.total += parseFloat(htmlProductCost.value);
      htmlTotal.value = this.total;
      // Pushing the product object in a temp array
      this.tmpArray.push(tempObj);
      // Updating the state with the content of temp array
      this.setState({ listPreview: this.tmpArray });
    }
  };

  // METHOD TO REMIVE A PRODUCT FROM THE PREVIEW LIST
  removeProduct(e) {
    console.log("ORIGIN", origin);
    // Getting HTML elements for manipulation
    const htmlParentNodeId = document.getElementById(e.target.id).parentNode.id;
    const htmlProductId = document.getElementById(
      `productId${htmlParentNodeId}`
    );
    const htmlProductCost = document.getElementById(`cost${htmlParentNodeId}`);
    const htmlProductQuantity = document.getElementById(
      `quantity${htmlParentNodeId}`
    );

    // When removing the product from the list:
    // Update the Total, reset the quantity and cost in the product list
    const htmlTotal = document.getElementById("list-preview-total");
    this.total -= htmlProductCost.value;
    htmlTotal.value = this.total;
    htmlProductCost.value = "";
    htmlProductQuantity.value = "";

    // Get all the products from the preview list differents from the one I'm removing and set the state and the temporal array
    // that keeps the product in the preview list
    let updatedListPreview = this.state.listPreview.filter(
      (item) => item.productId !== htmlProductId.value
    );
    this.setState({ listPreview: updatedListPreview });
    this.tmpArray = updatedListPreview;
  }

  // When the user triggers an event to check/uncheck the product:
  // Define if it is an action of inserting or deleting a product to/from the preview list
  handleProduct = (e) => {
    const htmlParentNodeId = document.getElementById(e.target.id).parentNode.id;
    const htmlProductStatus = document.getElementById(
      `productStatus${htmlParentNodeId}`
    );

    this.handleButton(e);
    if (htmlProductStatus.value === "Checked") {
      this.insertProduct(e);
    } else {
      this.removeProduct(e);
    }
  };

  // Method to persist the list in the database
  createCart = () => {
    console.log("Creating list...", this.state.listPreview);
    let listArray = [];
    for (let i = 0; i < this.state.listPreview.length; i++) {
      let tmpObj = {};
      console.log(
        this.state.listPreview[i],
        this.state.listPreview[i].productId
      );
      tmpObj["productId"] = this.state.listPreview[i].productId;
      tmpObj["userId"] = this.state.listPreview[i].userId;
      tmpObj["listName"] = this.state.listPreview[i].listName;
      tmpObj["quantity"] = this.state.listPreview[i].quantity;
      tmpObj["cost"] = this.state.listPreview[i].cost;

      listArray.push(tmpObj);
    }
    console.log(listArray);

    // for (const [property, value] of entries) {
    //   console.log(`There are ${count} ${fruit}s`)
    // }
  };

  render() {
    const storeProducts = this.props.productsByStore.map((product) => {
      console.log(
        product.id,
        product.storeId,
        product.productId,
        product.price,
        product.Product.id,
        product.Product.unitId,
        product.Product.categoryId,
        product.Product.description,
        product.Product.picture
      );
      return (
        <div
          key={product.id}
          id={product.id}
          className="individual-product-container"
        >
          <img
            id={`image${product.id}`}
            className="product-selector-image"
            src={product.Product.picture}
            alt=""
          />
          <input
            id={`imageURL${product.id}`}
            type="hidden"
            name="imageURL"
            value={product.Product.picture}
            disabled
          />

          <input
            id={`productId${product.id}`}
            type="hidden"
            name="productId"
            value={product.id}
            disabled
          />
          <input
            id={`userId${product.id}`}
            type="hidden"
            name="userId"
            value="1"
            disabled
          />
          <input
            id={`listName${product.id}`}
            type="hidden"
            name="listName"
            value={this.props.listHeader.listName}
            disabled
          />
          <input
            id={`productDescription${product.id}`}
            type="text"
            name="productDescription"
            value={product.Product.description}
            className="large-size-sel"
            disabled
          />
          <input
            id={`productPrice${product.id}`}
            type="text"
            name="productPrice"
            value={product.price}
            className="medium-size-sel number-field"
            disabled
          />
          <input
            id={`quantity${product.id}`}
            type="number"
            name="quantity"
            onChange={this.handleChange}
            className="medium-size-sel number-field"
          />
          <input
            id={`cost${product.id}`}
            type="number"
            name="cost"
            className="medium-size-sel number-field"
            disabled
          />
          <input
            id={`productStatus${product.id}`}
            type="hidden"
            name="productStatus"
          />
          <button
            id={`buttonSelect${product.id}`}
            className="button-product-unchecked"
            type="button"
            name="buttonSelect"
            onClick={this.handleProduct}
          >
            Check
          </button>
        </div>
      );
    });
    return (
      <div className="product-selector-container">
        <div className="all-product-container">
          <div className="product-header-container">
            <p className="padding1"></p>
            <p className="large-size-sel">Description</p>
            <p className="medium-size-sel">Price</p>
            <p className="medium-size-sel">Quantity</p>
            <p className="medium-size-sel">Amount</p>
            <p className="padding2"></p>
          </div>
          {storeProducts}
        </div>
        <div className="list-preview-container">
          {/* <div className="list-preview-header-container">
            <p className="large-size-sel">Description</p>
            <p className="small-size-sel">Qty</p>
            <p className="small-size-sel">Cost</p>
          </div> */}
          <div className="list-preview-all-product-container">
            <ListPreview
              listPreview={this.state.listPreview}
              createCart={this.createCart}
            />
          </div>
          {/* <div className="list-preview-total-container">
            <input
              id="list-preview-total"
              className="medium-size"
              type="number"
              disabled={true}
            />
          </div> */}
        </div>
      </div>
    );
  } // end render
} // end class
//};

export default ProductSelector;
