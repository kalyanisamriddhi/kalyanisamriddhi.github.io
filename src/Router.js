import React from "react";
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home"
import About from "./Containers/About"
import Events from "./Containers/Events"
import Contact from "./Containers/Contact"
import EventPost from "./Containers/EventPost";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import styled from "styled-components";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Router = () => {
  return (
    <DefaultRouter history={history}>
      <NavBar />
      <NavPadding />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/event/:title/:issueNumber" component={EventPost} />
      </Switch>
      <Footer />
    </DefaultRouter>
  );
};

const NavPadding = styled.div`
  min-height: 70px;
`

export default Router;
