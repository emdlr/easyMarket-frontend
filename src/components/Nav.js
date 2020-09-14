import React, { Component } from "react";
import "./Nav.css";
<<<<<<< HEAD
import {Link} from "react-router-dom";
import Axios from "axios";

export default class Nav extends Component {
  constructor(){
    super();
    this.state={
      username:"",
      password:"",
      user:{},
      reset:false,
      hide:false
    }
  }
  getUsername = (e) =>{
    this.setState({
      username:e.target.value
    })
  }
  getPassword = (e) =>{
    this.setState({
      password:e.target.value
    })
  }

   logIn = (e) =>{
    e.preventDefault();
    if(!this.state.username||!this.state.password)
        alert("Review Log In Data");
    else{
     Axios.post(`${this.props.backendUrl}/users/login`,
                                                      {username: this.state.username,
                                                      password:this.state.password}).then(response =>{
            if(response.data.user){
                let user = {userId:response.data.user.id,userName:response.data.user.username};                                        
                this.setState({
                  user:user
                })
                this.props.logings(response.data.user.id,true);
              }else
              alert("Log In data incorrect");
            
            })
     }
  }
  logOut = (e) =>{
    e.preventDefault();
    this.setState({
          userName:""
    })
    this.props.logings(e,false);
    window.history.forward();
    window.open("/","_self")
    
  }
  signUp = (e) => {
    e.preventDefault();
    if(!this.state.username||!this.state.password)
        alert("Review Sign Up Data");
    else{
     Axios.post(`${this.props.backendUrl}/users`,
                                                {username: this.state.username,
                                                password:this.state.password}).then(response =>{
                if(response.data!==400){
                  this.props.logings(response.data.user.id,true);
                }else{
                  alert("User Already Exists");
                }
              })
     }
  
  }
  goLists = (e) =>{
    this.setState({
      reset:!this.state.reset
    })
  }
  render(){
    if(!this.props.isLoggedIn){
      return(
        <div className="nav">
          <input type="text" onChange={this.getUsername} className="nav-login" placeholder="Username"/>
          <input type="password" onChange={this.getPassword} className="nav-login" placeholder="Password"/>
          <div className="nav-sign"onClick={this.logIn}>Log In</div>
          <div className="nav-sign" onClick={this.signUp}>Sign up</div>
      </div>
      );
    }else{
      return(
        <div className="nav">
          <p>Hello {this.state.username}</p>
          <div className="nav-sign"onClick={this.logOut}>Log Out</div>
      </div>
=======
import { Link } from "react-router-dom";
import Axios from "axios";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user: {},
      reset: false,
      hide: false,
    };
  }
  getUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  getPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  logIn = (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password)
      alert("Review Log In Data");
    else {
      Axios.post(`${this.props.backendUrl}/users/login`, {
        username: this.state.username,
        password: this.state.password,
      }).then((response) => {
        if (response.data.user) {
          let user = {
            userId: response.data.user.id,
            userName: response.data.user.username,
          };
          this.setState({
            user: user,
          });
          this.props.logings(response.data.user.id, true);
        } else alert("Log In data incorrect");
      });
    }
  };
  logOut = (e) => {
    e.preventDefault();
    this.setState({
      userName: "",
    });
    this.props.logings(e, false);
    window.history.forward();
    window.open("/", "_self");
  };
  signUp = (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password)
      alert("Review Sign Up Data");
    else {
      Axios.post(`${this.props.backendUrl}/users`, {
        username: this.state.username,
        password: this.state.password,
      }).then((response) => {
        if (response.data !== 400) {
          this.props.logings(response.data.user.id, true);
        } else {
          alert("User Already Exists");
        }
      });
    }
  };
  goLists = (e) => {
    this.setState({
      reset: !this.state.reset,
    });
  };
  render() {
    if (!this.props.isLoggedIn) {
      return (
        <div className="nav">
          <input
            type="text"
            onChange={this.getUsername}
            className="nav-login"
            placeholder="Username"
          />
          <input
            type="password"
            onChange={this.getPassword}
            className="nav-login"
            placeholder="Password"
          />
          <div className="nav-sign" onClick={this.logIn}>
            Log In
          </div>
          <div className="nav-sign" onClick={this.signUp}>
            Sign up
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav">
          <p>Hello {this.state.username}</p>
          <div className="nav-sign" onClick={this.logOut}>
            Log Out
          </div>
        </div>
>>>>>>> dfc527c47bc422d3b2a60b30b09dd61f91f862e8
      );
    }
  }
}
