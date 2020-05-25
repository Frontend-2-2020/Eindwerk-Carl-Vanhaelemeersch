import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserCommentList extends Component {
  render() {
    const { comment } = this.props;
    return (
      <Link to={"/detail/" + comment.blog_post_id}>
        <div dangerouslySetInnerHTML={{ __html: comment.body }}></div>
      </Link>
    );
  }
}

export default UserCommentList;
