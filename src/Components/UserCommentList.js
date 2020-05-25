import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../libs/API";
import { connect } from "react-redux";

class UserCommentList extends Component {
  removePost = () => {
    API.delete(
      "https://eindwerk.jnnck.be/api/comments/" + this.props.comment.id
    )
      .then((response) => {
        console.log(response.data);
        this.props.getUsersByID();
      })
      .catch((error) => {
        console.log(error);
      });
  };
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

export default connect(mapStateToProps)(UserCommentList);
