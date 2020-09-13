import React, { Component } from "react";
import "./ListPreview.css";

class ListPreview extends Component {
  render() {
    // console.log("this.props.tmpArray", this.props.tmpArray);
    const htmlListPreview = this.props.listPreview.map((item, index) => {
      return (
        <div className="list-preview-product-container" key={item.productId}>
          <input type="hidden" value={item.productId} />
          {/* <p className="list-preview-element-no-visible">{item.productId}</p> */}
          <input type="hidden" value={item.userId} />
          {/* <p className="list-preview-element-no-visible">{item.userId}</p> */}
          <input type="hidden" value={item.listName} />
          {/* <p className="list-preview-element-no-visible">{item.listName}</p> */}
          <input type="hidden" value={item.pickedStatus} />
          {/* <p className="list-preview-element-no-visible">{item.pickedStatus}</p> */}
          <input
            className="medium-size"
            value={item.productDescription}
            disabled={true}
          />
          <input className="small-size" value={item.quantity} disabled={true} />
          <input className="small-size" value={item.cost} disabled={true} />
        </div>
      );
    });
    return <div>{htmlListPreview}</div>;
  }
} // end class

export default ListPreview;
