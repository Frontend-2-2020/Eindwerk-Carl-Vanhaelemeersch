import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Components/Loader";
import { connect } from "react-redux";
import { getUser } from "./redux/actions/authActions";
import LoginLogoutBtn from "./Components/Buttons/LoginLogoutBtn";
import RegisterBtn from "./Components/Buttons/RegisterBtn";
import UserBtn from "./Components/Buttons/UserBtn";
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
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={{
            background:
              "linear-gradient(320deg, rgba(27,41,35,0.9363095580028886) 0%, rgba(19,37,30,0.9475140397956058) 15%, rgba(10,23,18,0.9139005944174545) 30%, rgba(7,18,14,0.9251050762101716) 45%, rgba(5,15,12,0.9391106784510679) 60%, rgba(5,19,14,0.9531162806919643) 75%, rgba(3,0,0,1) 90%)",
            transform: "skew(-25deg)",
            minHeight: "12rem",
          }}
        >
          <Navbar.Brand style={{ width: "15vw", marginLeft: "1.1vw" }}>
            <Link to="/">
              <FontAwesomeIcon
                icon={faFlushed}
                style={{
                  fontSize: 100,
                  color: "rgb(205, 249, 250, 0.7)",
                  margin: "2vh 0 2vh 5vw",
                  transform: "skew(25deg)",
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ transform: "skew(25deg)" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="mr-auto"
              style={{
                transform: "skew(25deg)",
                float: "right",
                fontSize: "1.5rem",
              }}
            >
              <LoginLogoutBtn auth={auth} style={{ marginLeft: "2vw" }} />
              <RegisterBtn auth={auth} style={{ marginLeft: "2vw" }} />
              <UserBtn auth={auth} style={{ marginLeft: "2vw" }} />
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
