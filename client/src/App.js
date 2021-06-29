import React from "react";
import Register from "./components/register/register.js";
import Pcparts from "./components/pcparts/pcparts.js";

import NavBar from "./components/navbar/navbar.js";
import About from "./components/about/about.js";
import Login from "./components/login/login.js";
import Home from "./components/home/home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <NavBar />
          <About />
          
        </Route>
        <Route path="/pc">
          <NavBar />
          <Pcparts />
        
        </Route>
        <Route path="/register">
          <NavBar />
          <Register />
          
        </Route>
        <Route path="/login">
          <NavBar />
          <Login />
        
        </Route>
        <Route path="/">
          <NavBar />
          <Home />
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
