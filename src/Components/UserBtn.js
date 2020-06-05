import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserBtn extends Component {
  render() {
    const { auth } = this.props;
    if (auth.last_name) {
      return (
        <Link to={"/user/" + auth.id} className="nav-link">
          User
        </Link>
      );
    } else {
      return <div></div>;
    }
  }
}

export default UserBtn;
