import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Resume from "./Resume";
import Main from "./Main";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Main}/>
          <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>  
    );
  }
}

export default Router;