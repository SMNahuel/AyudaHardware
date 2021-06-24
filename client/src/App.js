import React from "react";
import SuccessRegister from "./components/register/success.register.js";
import Register from "./components/register/register.js";
import Pcparts from "./components/pcparts/pcparts.js";
import Footer from "./components/footer/footer.js";
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
          <Footer />
        </Route>
        <Route path="/pc">
          <NavBar />
          <Pcparts />
          <Footer />
        </Route>
        <Route path="/success_register">
          <NavBar />
          <SuccessRegister />
          <Footer />
        </Route>
        <Route path="/register">
          <NavBar />
          <Register />
          <Footer />
        </Route>
        <Route path="/login">
          <NavBar />
          <Login />
          <Footer />
        </Route>
        <Route path="/">
          <NavBar />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
