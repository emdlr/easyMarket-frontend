import React, { Component } from "react";
import "./User.css";
import Axios from "axios";

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      listNames: [],
      lists: [],
      isIndividual: false,
      individualList: [],
      indListName: "",
      totalCost: 0,
    };
  }
  async componentDidMount() {
    const listsObj = await Axios.get(
      `${this.props.backendUrl}/users/profile/${this.props.match.params.id}`
    );
    let lNames = [];
    if (listsObj.data.user.Lists.length > 0) {
      for (let i = 0; i < listsObj.data.user.Lists.length; i++) {
        lNames.push(listsObj.data.user.Lists[i].listName);
      }
    }
    this.setState({
      userName: listsObj.data.user.username,
      listNames: Array.from(new Set(lNames)),
      lists: listsObj.data.user.Lists,
    });
    lNames = [];
  }
  getList = (e) => {
    e.preventDefault();
    let listName = e.target.innerText;
    let indList = [];
    let total = 0;
    for (let i = 0; i < this.state.lists.length; i++) {
      if (this.state.lists[i].listName === listName) {
        indList.push({
          id: this.state.lists[i].id,
          prodName: this.state.lists[i].Product.description,
          prodPicture: this.state.lists[i].Product.picture,
          cost: this.state.lists[i].cost,
          isPicked: this.state.lists[i].pickedStatus,
          quantity: this.state.lists[i].quantity,
          unit: this.state.lists[i].Product.Unit.description,
        });
        if (this.state.lists[i].pickedStatus) total += this.state.lists[i].cost;
      }
    }
    this.setState({
      isIndividual: true,
      individualList: indList,
      indListName: listName,
      totalCost: total,
    });
    indList = [];
  };
  myLists = (e) => {
    e.preventDefault();
    this.setState({
      isIndividual: false,
      totalCost: 0,
    });
  };
  updatePick = async (e) => {
    e.preventDefault();
    let nextStatus = e.target.checked ? true : false;
    let listId = e.target.name;
    const list = await Axios.put(
      `${this.props.backendUrl}/lists/${e.target.name}`,
      { newStatus: nextStatus }
    );
    let indL = this.state.individualList;
    let total = 0;

    for (const prop in indL) {
      if (indL[prop].id == listId) {
        indL[prop].isPicked = nextStatus;
      }
      if (indL[prop].isPicked) total += indL[prop].cost;
    }

    let allLists = this.state.lists;
    for (const prop in allLists) {
      if (allLists[prop].id == listId) {
        allLists[prop].pickedStatus = nextStatus;
        break;
      }
    }
    this.setState({
      individualList: indL,
      lists: allLists,
      totalCost: total,
    });
    indL = [];
    allLists = [];
  };
  deleteList = async (e) => {
    e.preventDefault();
    if (window.confirm("Do you want to Delete this list?")) {
      let listnames = this.state.listNames;
      listnames.splice(listnames.indexOf(e.target.attributes.name.value), 1);
      const list = await Axios.delete(
        `${this.props.backendUrl}/lists/${e.target.attributes.name.value}/user/${e.target.attributes.name2.value}`
      );
      this.setState({
        listNames: listnames,
      });
    }
  };
  //NEW TO GET LIST STATUS
  async getListStatus(name, user, rowId) {
    const list = await Axios.get(
      `${this.props.backendUrl}/lists?name=${name}&user=${user}`
    );
    let listStatus = document.querySelector(`#${rowId}`);
    let idxPicked = false;
    let idxNotPicked = false;

    list.data.list.map((product) => {
      product.pickedStatus ? (idxPicked = true) : (idxNotPicked = true);
    });

    if (idxPicked && idxNotPicked) listStatus.innerText = "InProcess";
    else if (!idxPicked && idxNotPicked) listStatus.innerText = "New";
    else if (idxPicked && !idxNotPicked) listStatus.innerText = "Completed";
  }
  render() {
    if (!this.state.isIndividual) {
      return (
        <div className="userContainer">
          <div className="greeting">
            HELLO {`${this.state.userName.toUpperCase()}`}
          </div>
          <div className="userList">Your Lists</div>
          <div className="lists-header-cont">
            <div id="header1" className="listHeaders">
              List Name
            </div>
            <div id="header2" className="listHeaders">
              Status
            </div>
            <div></div>
          </div>
          {this.state.listNames.map((list, key) => {
            return (
              <div key={key} className="lists-names-body">
                <div
                  className="listData"
                  name={this.props.match.params.id}
                  onClick={this.getList}
                >
                  {list}
                </div>
                <div
                  id={`list${key}`}
                  className="listData"
                  onLoad={this.getListStatus(
                    list,
                    this.props.match.params.id,
                    `list${key}`
                  )}
                ></div>
                <div
                  name={list}
                  name2={this.props.match.params.id}
                  onClick={this.deleteList}
                  className="list-delete-button"
                >
                  X
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="userContainer">
          <div className="listHead">
            <div className="greeting">
              HELLO {`${this.state.userName.toUpperCase()}`}
            </div>
            <div className="lists-button" onClick={this.myLists}>
              Back to my Lists
            </div>
          </div>
          <div className="listName">{this.state.indListName}</div>
          <div className="list-headers-cont">
            <div className="listHeaders">Picture</div>
            <div className="listHeaders">Product</div>
            <div className="listHeaders">Qty</div>
            <div className="listHeaders">Unit</div>
            <div></div>
            <div className="listHeaders">Cost</div>
            <div className="listHeaders">Picked?</div>
          </div>
          {this.state.individualList.map((product, key) => {
            return (
              <div className="list-body-cont">
                <div className="picCol">
                  <img src={product.prodPicture} className="pickImg" />
                </div>
                <div className="prodCol">{product.prodName}</div>
                <div className="qtyCol">{product.quantity}</div>
                <div className="unitCol">{product.unit}</div>
                <div className="dollarCol">$</div>
                <div className="costCol">{product.cost}</div>
                <div className="checkCol">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name={product.id}
                    onClick={this.updatePick}
                    checked={product.isPicked ? true : false}
                  />
                </div>
              </div>
            );
          })}
          <div className="list-footer">
            <div>Amount Picked:</div>
            <div>
              <input
                type="text"
                className="pickedCost"
                value={"$" + this.state.totalCost}
                disabled
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
