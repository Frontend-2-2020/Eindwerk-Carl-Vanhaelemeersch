import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import API from "../../libs/API";
import PropTypes from "prop-types";

class UserPostList extends Component {
  // REMOVE POST, THEN GETUSER (DISPLAY ERROR IF ANY)
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

    // LIST OF POST TITLES AND IF LOGGED IN ID = POST USER ID, OPTION TO EDIT AND REMOVE POST
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
UserPostList.propTypes = {
  posts: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    user_id: PropTypes.number,
  }).isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(UserPostList);
