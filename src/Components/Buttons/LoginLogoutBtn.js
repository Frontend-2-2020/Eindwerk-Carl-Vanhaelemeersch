import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class LoginLogoutBtn extends Component {
  // ON LOGOUT,WE REMOVE OUR TOKEN EN RELOAD THE PAGE

  logout = () => {
    window.localStorage.removeItem("CarlEindwerk_token");
    window.location.reload(false);
  };

  //   DISPLAY LOGIN OR LOGOUT BTN PENDING IF WE'RE LOGGED IN OR NOT
  render() {
    const { auth } = this.props;
    if (auth.last_name) {
      return (
        <Link to="/" className="nav-link" onClick={this.logout}>
          Logout
        </Link>
      );
    } else {
      return (
        <Link to="/login" className="nav-link">
          Login
        </Link>
      );
    }
  }
}
LoginLogoutBtn.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default LoginLogoutBtn;
