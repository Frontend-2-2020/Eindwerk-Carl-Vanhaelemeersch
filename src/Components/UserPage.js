import React, { Component } from "react";
import PropTypes from "prop-types";

class UserPage extends Component {
  // DISPLAY OF OUR USER PAGE
  render() {
    const { user } = this.props;
    const name = user.first_name + " " + user.last_name;
    return (
      <div className="card">
        <img
          className="card-img-top"
          style={{ width: "20vw " }}
          src={user.avatar}
          alt="User profile pic"
        />
        <h5 className="card-title">{name}</h5>
        <div className="card-body">
          <span className="font-weight-bold">Contact: </span>
          {user.email}
        </div>
        <div className="card-body">
          <span className="font-weight-bold">Lid sinds: </span>
          {user.created_at}
        </div>
        <div className="card-body">
          <span className="font-weight-bold">Laats ingelogd: </span>
          {user.last_login_at}
        </div>
      </div>
    );
  }
}
UserPage.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    last_login_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default UserPage;
