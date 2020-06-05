import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Components/Loader";
import { connect } from "react-redux";
import { getUser } from "./redux/actions/authActions";
import LoginLogoutBtn from "./Components/LoginLogoutBtn";
import RegisterBtn from "./Components/RegisterBtn";
import "./css/normalize.css";
import { faFlushed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Components/Footer";

// USING LAZY TO SAVE ON DATA LOADING

const Home = React.lazy(() => import("./Pages/Home"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const User = React.lazy(() => import("./Pages/User"));
const Detail = React.lazy(() => import("./Pages/Detail"));
const EditComment = React.lazy(() => import("./Pages/EditComment"));
const EditPost = React.lazy(() => import("./Pages/EditPost"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { auth } = this.props;
    return (
      //USING REACT-ROUTER FOR ROUTING OUR SITE, AND MAKING REACT A LOT EASIER IN RETURN
      // USING /.../:ID TO GIVE ID IN OUR URL, THEN USING const id = this.props.match.params.id TO USE IT IN CODE
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand style={{ width: "15vw", marginLeft: "1.1vw" }}>
            <Link to="/">
              <FontAwesomeIcon
                icon={faFlushed}
                style={{ fontSize: 100, color: "white", marginLeft: "5vw" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LoginLogoutBtn style={{ marginLeft: "2vw" }} />
              <RegisterBtn style={{ marginLeft: "2vw" }} />
              <Link
                to={"/user/" + auth.id}
                className="nav-link"
                style={{ marginLeft: "2vw" }}
              >
                User
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user/:id" component={User} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/editComment/:id" component={EditComment} />
            <Route path="/editPost/:id" component={EditPost} />
            <Route path="/" exact component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>

        <Footer />
      </Router>
    );
  }
}

// NEED TO GET OUR GETUSER HERE INSTEAD OF HOME, SO IT IS NEVER UNDEFINED
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
