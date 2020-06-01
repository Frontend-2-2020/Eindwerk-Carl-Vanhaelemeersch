import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LoginLogoutBtn extends Component {
  // ON LOGOUT,WE REMOVE OUR TOKEN EN RELOAD THE PAGE

  logout = () => {
    window.localStorage.removeItem("CarlEindwerk_token");
    window.location.reload(false);
  };

  //   DISPLAY LOGIN OR LOGOUT BTN PENDING IF WE'RE LOGGED IN OR NOT

  render() {
    if (this.props.auth.last_name) {
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
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LoginLogoutBtn);
