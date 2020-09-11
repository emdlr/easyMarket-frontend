import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import CreateList from "./components/CreateList.js";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

const backendUrl = process.env.BACKEND_URL || "http://localhost:3000/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      stores: [],
      productsByStore: [],
    }; // end state
  } // end constructor

  getCategories = async () => {
    const response = await axios.get(`${backendUrl}/categories`);
    console.log("response: ", response.data.categories);
    this.setState({
      categories: response.data.categories,
    });
  };

  populateCategory = () => {
    console.log("Filter props category", this.state.categories);

    var ele = document.getElementById("category");
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
    console.log("response: ", response.data.stores);
    this.setState({
      stores: response.data.stores,
    });
  };

  populateStore = () => {
    console.log("Filter props stores", this.state.stores);

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

  populateProduct = () => {
    console.log("Getting products....");
  };

  async componentDidMount() {
    this.getCategories();
    this.getStores();
  }

  render() {
    console.log("this.state: ", this.state);
    return (
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/List">
            <CreateList
              populateCategory={this.populateCategory}
              populateStore={this.populateStore}
              populateProduct={this.populateProduct}
              productsByStore={this.state.productsByStore}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
} // end class

export default App;
