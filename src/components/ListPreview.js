import React, { Component } from "react";
import "./ListPreview.css";

class ListPreview extends Component {
  render() {
    // console.log("this.props.tmpArray", this.props.tmpArray);
    const htmlListPreview = this.props.listPreview.map((item, index) => {
      return (
<<<<<<< HEAD
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
=======
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
            <p className="list-preview-padding2"></p>
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
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
