import React, { Component } from "react";
import "./Nav.css";
import {Link} from "react-router-dom";
import Axios from "axios";

export default class Nav extends Component {
  constructor(){
    super();
    this.state={
      username:"",
      password:"",
      isLoggedIn:false,
      user:{}
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
                  isLoggedIn:true,
                  user:user
                })
              }else
              alert("Log In data incorrect");
            
            })
     }
  }
  logOut = (e) =>{
    e.preventDefault();
    this.setState({
          isLoggedIn:false,
          userName:""
    })
    window.close();
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
                  this.setState({
                    isLoggedIn:true
                  })
                }else{
                  alert("User Already Exists");
                }
              })
     }
  
  }
  render(){
    if(!this.state.isLoggedIn){
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
          <p>Hello {this.state.user.userName}:</p>
          <Link to={`/user/${this.state.user.userId}`}> Goto Lists </Link>
          <div className="nav-sign"onClick={this.logOut}>Log Out</div>
      </div>
      );
    }
  }
}
