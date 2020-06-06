import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import API from "../../libs/API";
import { getPosts } from "../../redux/actions/postActions";
import PropTypes from "prop-types";
import "../../css/post.css";
import "../../css/buttons.css";

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
        <div className=" postCard shadow-lg">
          <div className=" postTitle">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "2.3em",
              }}
              to={"/detail/" + post.id}
            >
              {post.title}
            </Link>

            <p
              className=" postBody"
              dangerouslySetInnerHTML={{ __html: post.body }}
            ></p>
          </div>
          <h6 className=" postPosted">
            Posted by:
            <Link
              to={"/user/" + post.user.id}
              style={{
                textDecoration: "none",
              }}
            >
              <span className="text-muted">
                {" " + post.user.first_name + " " + post.user.last_name}
              </span>
            </Link>
          </h6>
          {post.user.id === auth.id && (
            <div>
              <Link to={"/editPost/" + post.id}>
                <span className="knop editen">Edit</span>
              </Link>

              <span className="knop deleten" onClick={this.removePost}>
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
