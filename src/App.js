import React, { Component } from 'react';
import Signup from './authenticate/Signup';
import Navbar from './navbar/Navbar';
import Router from './router/Router'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {name: ""}
    this.nameChange = this.nameChange.bind(this)
  }
  nameChange(name){
    this.setState({name: name})
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="app-container">
          <div id="app-menu-container">Menu goes here</div>
          <Router/>
        </div>
        {/*
          <Signup onSubmitSignup={this.nameChange}/>
        */}
      </div>
    );
  }
}

export default App;
