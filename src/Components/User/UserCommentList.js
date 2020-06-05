import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../libs/API";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class UserCommentList extends Component {
  // REMOVEPOST ON CORRECT COMMENT, THEN GETUSERSBYID (DISPLAY ERRORS IF ANY)
  removeComment = () => {
    const { getUsersByID, comment } = this.props;
    API.delete("https://eindwerk.jnnck.be/api/comments/" + comment.id)
      .then((response) => {
        getUsersByID();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DISPLAY OUR COMMENTLIST AS WRITTEN IN CODEDITOR,
  // AND IF LOGGED IN ID = COMMENT USER ID, OPTION TO EDIT AND REMOVE COMMENT
  render() {
    const { comment, auth } = this.props;
    return (
      <div className="border border-primary mb-4">
        <Link to={"/detail/" + comment.blog_post_id}>
          <div dangerouslySetInnerHTML={{ __html: comment.body }}></div>
        </Link>
        {comment.user_id === auth.id && (
          <div className="d-inline ml-2">
            <Link to={"/editComment/" + comment.id}>
              <span className="badge badge-info mb-4">Edit</span>
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
UserCommentList.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    blog_post_id: PropTypes.number,
    body: PropTypes.string,
  }).isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(UserCommentList);
