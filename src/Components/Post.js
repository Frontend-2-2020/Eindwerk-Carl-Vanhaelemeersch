import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import API from "../libs/API";
import { getPosts } from "../redux/actions/postActions";
import PropTypes from "prop-types";

class Post extends Component {
  // WHEN REMOVEPOST: DELETE CORRECT POST, THEN GETPOSTS AGAIN (DISPLAY ERROR IF ANY)
  removePost = () => {
    const { post, getPosts } = this.props;
    API.delete("https://eindwerk.jnnck.be/api/posts/" + post.id)
      .then((response) => {
        getPosts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { post, auth } = this.props;

    // DISPLAY OF OUR POST AND IF LOGGED IN ID = POST USER ID, OPTION TO EDIT OR REMOVE POST
    return (
      <div>
        <div className="card mt-4" style={{ width: "50%" }}>
          <div className="card-body">
            <Link to={"/detail/" + post.id}>{post.title}</Link>

            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.body }}
            ></p>
          </div>
          <h6 className="card-subtitle mb-2 ">
            Posted by:
            <Link to={"/user/" + post.user.id}>
              <span className="text-muted">
                {post.user.first_name + "" + post.user.last_name}
              </span>
            </Link>
          </h6>
          {post.user.id === auth.id && (
            <div>
              <Link to={"/editPost/" + post.id}>
                <span className="badge badge-info">Edit</span>
              </Link>

              <span className="badge badge-danger" onClick={this.removePost}>
                Remove
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }).isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
