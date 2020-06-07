import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/userpage.css";

class UserPage extends Component {
  // DISPLAY OF OUR USER PAGE
  render() {
    const { user } = this.props;
    const name = user.first_name + " " + user.last_name;
    return (
      <div className="user-cont">
        <div>
          <div className="user-frame">
            <img
              className="user-image"
              src={user.avatar}
              alt="User profile pic"
              style={{ border: "1em solid" + user.favorite_color }}
            />
          </div>
          <h2>{name}</h2>
          <div className="user-body">
            <div className="user-stick"></div>
          </div>
          <div className="user-feet">
            <div>
              <span className="user-bold">Contact: </span>
              {user.email}
            </div>
            <div>
              <span className="user-bold">Lid sinds: </span>
              {user.created_at}
            </div>
            <div>
              <span className="user-bold">Laats ingelogd: </span>
              {user.last_login_at}
            </div>
          </div>
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
