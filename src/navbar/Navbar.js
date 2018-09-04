import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(){
    super();
    (localStorage.getItem("name")) ? this.name = localStorage.getItem("name") : this.name = "";
    window.addEventListener('storage', function(e) {
     console.log('Woohoo, someone changed my localstorage va another tab/window!');
    });
  }
  render() {
    return (
      <div id="navbar">
        Share All the Things
        {this.name}
      </div>
    );
  }
}

export default Navbar;
