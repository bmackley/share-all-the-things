import React, { Component } from 'react';
import './Signup.css'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {name: "", email: "", password: ""}
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
  }
  handleNameChange(event){
    this.setState({name: event.target.value})
  }
  handleEmailChange(event){
    this.setState({email: event.target.value})
  }
  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }
  handleSignupSubmit(event){
    event.preventDefault();
    // window.localStorage.setItem("name", this.state.name)
    // console.log(localStorage.getItem("name"));
    window.location = "/"
    this.props.onSubmitSignup(this.state.name);
  }
  render() {
    return(
      <form id="signup-form">
        <h1>Signup</h1>
        <div className="signup-input"> <input type="text" placeholder="name" onChange={this.handleNameChange} name="name"></input></div>
        <div className="signup-input"><input type="email" placeholder="email" onChange={this.handleEmailChange} name="email"></input></div>
        <div className="signup-input"> <input type="password" placeholder="password" onChange={this.handlePasswordChange} name="password"></input></div>
        <button className="button-big" id="submitButton" onClick={this.handleSignupSubmit}>Submit</button>
      </form>
    );
  }
}

export default Signup;
