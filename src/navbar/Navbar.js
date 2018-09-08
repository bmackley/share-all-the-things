import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(){
    super();
    (localStorage.getItem("name")) ? this.name = localStorage.getItem("name") : this.name = "";
  }
  render() {
    return (
      <nav id="navbar">
        Share All the Things
        <div id="float-right">{this.name}</div>
      </nav>
    );
  }
}

export default Navbar;
