import React, { Component } from 'react';
import App from './App';
import Program from './Program';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

class Main extends Component {
    render() {
        console.log("App render");
        return (
          <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={App} />
                  <Route exact path='/program' component={Program} />
                </Switch>
          </BrowserRouter >
        )
      }
}

export default Main;
