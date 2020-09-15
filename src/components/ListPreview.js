import React, { Component } from "react";
import "./ListPreview.css";

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
            className="list-preview-delete-button"
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
