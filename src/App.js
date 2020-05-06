import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Components/Loader";

const Home = React.lazy(() => import("./Pages/Home"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const User = React.lazy(() => import("./Pages/User"));
const Detail = React.lazy(() => import("./Pages/Detail"));

class App extends Component {
  render() {
    return (
      //Using react-router distribute our code into differents paths/pages on our site
      // Add custum Loader

      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark">
          <Navbar.Brand>
            <Link to="/"> Placeholder Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register">Register</Link>
              </Nav.Link>
              <NavLink>
                <Link to="/user">User</Link>
              </NavLink>
              <NavLink>
                <Link to="/detail">Detail</Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user" component={User} />
            <Route path="/detail" component={Detail} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
// TODO:::
//TouchUp Register Form
//Documentatie
//Details: Strong Password, Emailvalidator zoal gezien in de les

export default App;
