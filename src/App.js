import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./screen/index";
import About from "./screen/about";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
