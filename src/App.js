import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Components/Loader";
import { connect } from "react-redux";
import { getUser } from "./redux/actions/authActions";

const Home = React.lazy(() => import("./Pages/Home"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const User = React.lazy(() => import("./Pages/User"));
const Detail = React.lazy(() => import("./Pages/Detail"));
const EditComment = React.lazy(() => import("./Pages/EditComment"));
const EditPost = React.lazy(() => import("./Pages/EditPost"));

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
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
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
              <Link to="/user" className="nav-link">
                User
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user" component={User} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="editComment:id" component={EditComment} />
            <Route path="editPost:id" component={EditPost} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
});

export default connect(undefined, mapDispatchToProps)(App);
