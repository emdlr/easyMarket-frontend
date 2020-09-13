import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import CreateList from "./components/CreateList.js";
import User from "./components/User.js";
import { Route, Link, Switch } from "react-router-dom";

const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav backendUrl={backendUrl}/>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/List">
          <CreateList />
        </Route>
        <Route path={"/user/:id"} render={(routerProps)=><User {...routerProps} backendUrl={backendUrl}/>}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
