import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from '../authenticate/Signup'
import './Router.css';

class Router extends Component {

  render() {
    return (
      <div id="router">
      <main>
        <Switch>
          <Route path='/' component={Signup}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </main>
      </div>
    );
  }
}

export default Router;
