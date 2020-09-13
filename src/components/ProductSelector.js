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
  }

  componentDidMount() {
    this.props.getProductsByStore();
  }

  // Method to handle the change on QUantity field
  handleChange = (e) => {
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

    if (
      e.target.value === null ||
      e.target.value <= 0 ||
      e.target.value === ""
    ) {
      htmlSubmitButton.disabled = true;
      htmlCost.value = "";
      htmlProductStatus.value = "";
      // htmlButtonSelect.value = "Check";
      htmlButtonSelect.classList.remove("button-product-checked");
    } else {
      htmlSubmitButton.disabled = false;
      htmlCost.value = htmlProductPrice.value * e.target.value;
    }
  }; // End handleChange

  // Method to handle the button behavior
  handleButton = (e) => {
    const htmlParentNodeId = document.getElementById(e.target.id).parentNode.id;
    // const htmlParentNode = document.getElementById(e.target.id).parentNode;
    const htmlProductCost = document.getElementById(`cost${htmlParentNodeId}`);
    const htmlProductQuantity = document.getElementById(
      `quantity${htmlParentNodeId}`
    );

    const htmlProductStatus = document.getElementById(
      `productStatus${htmlParentNodeId}`
    );
    const htmlButtonSelect = document.getElementById(
      `buttonSelect${htmlParentNodeId}`
    );

    if (htmlProductCost.value !== "") {
      if (
        htmlProductStatus.value === "" ||
        htmlProductStatus.value === "Unchecked"
      ) {
        htmlProductStatus.value = "Checked";
        // htmlButtonSelect.value = "Uncheck";
        htmlButtonSelect.classList.add("button-product-checked");
        // htmlParentNode.style.visibility = "hidden";
      } else if (htmlProductStatus.value === "Checked") {
        htmlProductStatus.value = "Unchecked";
        // htmlButtonSelect.value = "Check";
        htmlProductCost.value = "";
        htmlProductQuantity.value = "";
        htmlButtonSelect.classList.remove("button-product-checked");
      }
    }
  };

  // Method to insert a product into the Preview List
  insertProduct = (e) => {
    let tempObj = {};
    // let tmpArray = [];
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

    if (htmlProductCost.value !== "") {
      tempObj["productId"] = htmlProductId.value;
      tempObj["userId"] = htmlUserId.value;
      tempObj["productStatus"] = htmlProductStatus.value;
      tempObj["listName"] = htmlListName.value;
      tempObj["productDescription"] = htmlProductDescription.value;
      tempObj["quantity"] = htmlProductQuantity.value;
      tempObj["cost"] = htmlProductCost.value;
      tempObj["pickedStatus"] = "True";

      this.tmpArray.push(tempObj);
      this.setState({ listPreview: this.tmpArray });
    }
  };

  removeProduct(e) {
    const htmlParentNodeId = document.getElementById(e.target.id).parentNode.id;
    const htmlProductId = document.getElementById(
      `productId${htmlParentNodeId}`
    );

    console.log("Removign a product", this.state.listPreview);
    let updatedListPreview = this.state.listPreview.filter(
      (item) => item.productId !== htmlProductId.value
    );
    console.log(updatedListPreview);
    this.setState({ listPreview: updatedListPreview });
    this.tmpArray = updatedListPreview;
  }

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

    // this.handleView(e);
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
        <div key={product.id} id={product.id}>
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
            disabled
          />
          <input
            id={`productPrice${product.id}`}
            type="text"
            name="productPrice"
            value={product.price}
            disabled
          />
          <input
            id={`quantity${product.id}`}
            type="number"
            name="quantity"
            onChange={this.handleChange}
          />
          <input id={`cost${product.id}`} type="number" name="cost" disabled />
          <input
            id={`productStatus${product.id}`}
            type="hidden"
            name="productStatus"
          />
          <input
            id={`buttonSelect${product.id}`}
            className="button-product-unchecked"
            type="button"
            name="buttonSelect"
            value=">>"
            onClick={this.handleProduct}
          />
        </div>
      );
    });
    return (
      <div className="product-selector-container">
        <div className="product-container">{storeProducts}</div>
        <div className="list-preview-container">
          <div className="list-preview-totals">
            <input type="text" value="" disabled={true} />
          </div>
          <ListPreview listPreview={this.state.listPreview} />
        </div>
      </div>
    );
  } // end render
} // end class
//};

export default ProductSelector;
