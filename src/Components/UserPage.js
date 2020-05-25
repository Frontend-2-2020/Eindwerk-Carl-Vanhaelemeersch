import React, { Component } from "react";

class UserPage extends Component {
  render() {
    const { user } = this.props;
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
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
