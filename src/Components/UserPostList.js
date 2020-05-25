import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import API from "../libs/API";

class UserPostList extends Component {
  removePost = () => {
    API.delete("https://eindwerk.jnnck.be/api/posts/" + this.props.posts.id)
      .then((response) => {
        console.log(response.data);
        this.props.getUsersByID();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { posts, auth } = this.props;
    return (
      <div>
        <Link to={"/detail/" + posts.id}>{posts.title}</Link>
        {posts.user_id === auth.id && (
          <div className="d-inline ml-2">
            <Link to={"/editPost/" + posts.id}>
              <span className="badge badge-info">Edit</span>
            </Link>

            <span className="badge badge-danger" onClick={this.removePost}>
              Remove
            </span>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(UserPostList);
