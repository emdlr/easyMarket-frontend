import React, { Component } from "react";
import "./ListPreview.css";

// It renders the preview list of products every time a product is added or deleted
// from the preview list state
class ListPreview extends Component {
  render() {
    const htmlListPreview = this.props.listPreview.map((item, index) => {
      return (
        <div
          id={`lp-${item.productId}`}
          className="list-preview-product-container"
          key={item.productId}
        >
          <input type="hidden" value={item.productId} />
          <input type="hidden" value={item.userId} />
          <input type="hidden" value={item.listName} />
          <input type="hidden" value={item.pickedStatus} />
          <img src={item.imageURL} alt="" className="list-preview-image" />
          <input
            className="large-size"
            value={item.productDescription}
            disabled={true}
          />
          <input
            className="small-size number-field"
            type="number"
            value={item.quantity}
            disabled={true}
          />
          <input className="x-small-size" value="$" disabled={true} />

          <input
            className="small-size number-field"
            type="number"
            value={item.cost}
            disabled={true}
          />
          <button
            id={`lpButton-${item.productId}`}
            type="button"
            name="buttonDelete"
            className="list-preview-del-button"
            onClick={this.props.handleProductPreview}
          >
            X
          </button>
        </div>
      );
    });
    return (
      <div className="list-preview-all-product_container">
        {htmlListPreview}
      </div>
    );
  }
} // end class

export default ListPreview;
