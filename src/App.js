import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Components/Loader";

const Home = React.lazy(() => import("./Pages/Home"));
const Login = React.lazy(() => import("./Pages/Register"));
const Register = React.lazy(() => import("./Pages/User"));
const User = React.lazy(() => import("./Pages/Detail"));
const Detail = React.lazy(() => import("./Pages/Detail"));

// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import User from "./Pages/User";
// import Detail from "./Pages/Detail";

class App extends Component {
  render() {
    return (
      //Using react-router distribute our code into differents paths/pages on our site
      // Add Spinner and Lazy to split up code
      <Router>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/user">User</Link>
        <Link to="/detail">Detail</Link>

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
