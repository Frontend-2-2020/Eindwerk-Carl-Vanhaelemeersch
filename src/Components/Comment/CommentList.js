import React, { Component } from "react";
import { connect } from "react-redux";
import API from "../../libs/API";
import { getPosts } from "../../redux/actions/postActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CommentList extends Component {
  // REMOVE SELECTED COMMENT, THEN LOAD POSTS (DIPLAY ERROR IF FAIL)
  removeComment = () => {
    const { getPostsByID, comment } = this.props;
    API.delete("https://eindwerk.jnnck.be/api/comments/" + comment.id)
      .then((response) => {
        getPostsByID();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // WHEN LOGGED IN USER = USER ID OF COMMENT, DISPLAY EDIT OR DELETE COMMENT
  // DIPLAY COMMENT AS WRITTEN BY CODEDITOR
  render() {
    const { comment, auth } = this.props;
    return (
      <div className="mt-4 border border-primary rounded p-4">
        <div dangerouslySetInnerHTML={{ __html: comment.body }}></div>
        <div>
          Commented by: {comment.user.first_name} {comment.user.last_name}
        </div>
        {comment.user.id === auth.id && (
          <div>
            <Link to={"/editComment/" + comment.id}>
              <span className="badge badge-info">Edit</span>
            </Link>
            <span className="badge badge-danger" onClick={this.removeComment}>
              Remove
            </span>
          </div>
        )}
      </div>
    );
  }
}
CommentList.propTypes = {
  getPostsByID: PropTypes.func.isRequired,
  comment: PropTypes.shape({
    body: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }).isRequired,
  auth: PropTypes.object.isRequired,
};

// REDUX PART TO GET AUTH AND POSTS
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
