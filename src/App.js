import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import User from "./Pages/User";
import Detail from "./Pages/Detail";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/user">User</Link>
        <Link to="/detail">Detail</Link>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user" component={User} />
          <Route path="/detail" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
