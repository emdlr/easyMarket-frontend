import React, { Component } from "react";
import "./ProductSelector.css";

//const ProductSelector = (props) => {
class ProductSelector extends Component {
  constructor() {
    super();
    this.state = {
      Amount: null,
    };
  }
  componentDidMount() {
    this.props.getProductsByStore();
  }

  handleChange = (e) => {
    const htmlParentNode = document.getElementById(e.target.id).parentNode.id;
    const htmlSubmitButton = document.getElementById(
      `buttonSelect${htmlParentNode}`
    );
    const htmlProductPrice = document.getElementById(
      `productPrice${htmlParentNode}`
    );
    const htmlCost = document.getElementById(`cost${htmlParentNode}`);

    if (
      e.target.value === null ||
      e.target.value <= 0 ||
      e.target.value === ""
    ) {
      htmlSubmitButton.disabled = true;
      htmlCost.value = "";
    } else {
      htmlSubmitButton.disabled = false;
      htmlCost.value = htmlProductPrice.value * e.target.value;
    }
  };

  render() {
    console.log("Product Selector...", this.props.productsByStore);
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
          <input type="text" name="productId" value={product.id} disabled />
          <input type="number" name="userId" value="1" disabled />
          <input
            type="text"
            name="listName"
            value={this.props.listHeader.listName}
            disabled
          />
          <input
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
            id={`buttonSelect${product.id}`}
            type="button"
            name="buttonSelect"
            value="Select"
            disabled
          />
        </div>
      );
    });
    return <div>{storeProducts}</div>;
  } // end render
} // end class
//};

export default ProductSelector;
