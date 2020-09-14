import React, { Component } from "react";
import "./ListPreview.css";

class ListPreview extends Component {
  render() {
    // console.log("this.props.tmpArray", this.props.tmpArray);
    const htmlListPreview = this.props.listPreview.map((item, index) => {
      return (
        <div className="list-preview-product-container" key={item.productId}>
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
            type="button"
            name="buttonDelete"
            // onClick={this.handleProduct}
          >
            X
          </button>
        </div>
      );
    });
    return (
      <div>
        <div>
          <div className="list-preview-header-control">
            <button type="button" onClick={this.props.createCart}>
              Create shopping cart
            </button>
          </div>
          <div className="list-preview-header-container">
            <p className="list-preview-padding1"></p>
            <p className="large-size">Description</p>
            <p className="small-size">Qty</p>
            <p className="small-size">Cost</p>
          </div>
        </div>
        {htmlListPreview}
        <div className="list-preview-total-container">
          <input
            id="list-preview-total"
            className="medium-size number-field"
            type="number"
            disabled={true}
          />
        </div>
      </div>
    );
  }
} // end class

export default ListPreview;
