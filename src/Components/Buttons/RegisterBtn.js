import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterBtn extends Component {
  // DISPLAY REGISTER PENDING IF WE ARE LOGGED IN OR NOT

  render() {
    const { auth } = this.props;
    if (!auth.last_name) {
      return (
        <Link to="/register" className="nav-link">
          Register
        </Link>
      );
    } else {
      return <div></div>;
    }
  }
}

export default RegisterBtn;
