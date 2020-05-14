import React, { Component } from "react";

class CommentList extends Component {
  render() {
    // console.log(this.props);
    const { comment } = this.props;
    return (
      <div className="mt-4 border border-primary rounded p-4">
        <div dangerouslySetInnerHTML={{ __html: comment.body }}></div>
        <div>
          Commented by: {comment.user.first_name} {comment.user.last_name}
        </div>
      </div>
    );
  }
}

export default CommentList;
