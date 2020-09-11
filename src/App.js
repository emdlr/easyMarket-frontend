import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import CreateList from "./components/CreateList.js";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/List">
          <CreateList />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
