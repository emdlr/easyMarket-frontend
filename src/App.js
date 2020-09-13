import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import CreateList from "./components/CreateList.js";
import ListStore from "./components/ListStore.js";
import User from "./components/User.js";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";
class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      stores: [],
      listHeader: {},
      productsByStore: [],
      currentView: "",
      isLoggedIn:false,//emdlr
      userId:""//emdlr
    }; // end state
  } // end constructor
  logings = (user,value) =>{//emdlr
    this.setState({
      isLoggedIn:value,
      userId:user
    })
  }
  getCategories = async () => {
    const response = await axios.get(`${backendUrl}/categories`);
    this.setState({
      categories: response.data.categories,
    });
  };

  populateCategory = () => {
    const ele = document.getElementById("category");
    for (var i = 0; i < this.state.categories.length; i++) {
      // POPULATE SELECT ELEMENT WITH JSON.
      ele.innerHTML =
        ele.innerHTML +
        '<option value="' +
        this.state.categories[i]["id"] +
        '">' +
        this.state.categories[i]["description"] +
        "</option>";
    }
  };

  getStores = async () => {
    const response = await axios.get(`${backendUrl}/stores`);
    this.setState({
      stores: response.data.stores,
    });
  };

  populateStore = () => {
    var ele = document.getElementById("store");
    for (var i = 0; i < this.state.stores.length; i++) {
      // POPULATE SELECT ELEMENT WITH JSON.
      ele.innerHTML =
        ele.innerHTML +
        '<option value="' +
        this.state.stores[i]["id"] +
        '">' +
        this.state.stores[i]["description"] +
        "</option>";
    }
  };

  getListHeader = () => {
    // e.preventDefault();
    const tempHeader = {};
    // tempHeader["storeId"] = e.target.storeSelector.value;
    // tempHeader["storeName"] =
    //   e.target.storeSelector.options[
    //     e.target.storeSelector.options.selectedIndex
    //   ].text;
    // tempHeader["listName"] = e.target.listName.value;
    // this.setState({
    //   listHeader: tempHeader,
    // });

    const storeHtmlElement = document.getElementById("store");
    const listNameHtmlElement = document.getElementById("listName");
    tempHeader["storeId"] = storeHtmlElement.value;
    tempHeader["storeName"] =
      storeHtmlElement.options[storeHtmlElement.selectedIndex].text;
    tempHeader["listName"] = listNameHtmlElement.value;
    this.setState({
      listHeader: tempHeader,
    });
  };

  getProductsByStore = async () => {
    console.log("Getting products....");
    console.log("Store id....", this.state.listHeader.storeId);
    const response = await axios.get(
      `${backendUrl}/stores/${this.state.listHeader.storeId}/products`
    );
    console.log("getting products...", response.data.prices);
    this.setState({
      productsByStore: response.data.prices,
    });
  };

  setView = (view) => {
    this.setState({
      currentView: view,
    });
  }; // End setView

  pageView = () => {
    switch (this.state.currentView) {
      case "list-products":
        return (
          <CreateList
            populateCategory={this.populateCategory}
            populateProduct={this.populateProduct}
            listHeader={this.state.listHeader}
            getProductsByStore={this.getProductsByStore}
            productsByStore={this.state.productsByStore}
          />
        );
      default:
        return (
          <ListStore
            populateStore={this.populateStore}
            getListHeader={this.getListHeader}
            setView={this.setView}
          />
        );
    } // end switch
  }; // end pageView

  async componentDidMount() {
    this.getCategories();
    this.getStores();
  }

  render() {
    console.log("this.state: ", this.state);
    return (
      <div className="App">
        <Header />
        {/*emdlr*/}
        <Nav setView={this.setView} backendUrl={backendUrl} logings={this.logings} isLoggedIn={this.state.isLoggedIn}/>
        <Switch>
          <Route exact path="/">
            <Main userId={this.state.userId}/>
          </Route>
          <Route path="/CreateList">{this.pageView()}</Route>
          {/*emdlr*/}
          <Route path={"/user/:id"} render={(routerProps)=><User {...routerProps} backendUrl={backendUrl} logings={this.logings} isLoggedIn={this.state.isLoggedIn}/>}/>
        </Switch>
        <Footer />
      </div>
    );
  }
} // end class
export default App;
