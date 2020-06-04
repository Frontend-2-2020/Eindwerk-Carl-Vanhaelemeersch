import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class UserPage extends Component {
  // DISPLAY OF OUR USER PAGE
  render() {
    const { user, auth } = this.props;
    return (
      <div>
        <div>
          <div className="card">
            <img
              className="card-img-top"
              style={{ width: "20vw " }}
              src={user.avatar}
              alt="User profile pic"
            />
            <h5 className="card-title">
              {user.first_name} {user.last_name}
            </h5>
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
            {user.id === auth.id && (
              <Link to={"/editUser/" + user.id}>
                <button className="btn btn-primary btn-lg">Edit</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}
UserPage.propTypes = {
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(UserPage);
