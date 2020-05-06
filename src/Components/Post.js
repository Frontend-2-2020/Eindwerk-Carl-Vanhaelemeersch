import React, { Component } from "react";

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <div className="card mt-4" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
          <h6 className="card-subtitle mb-2 ">
            Posted by:
            <span className="text-muted">
              {post.user.first_name + "" + post.user.last_name}
            </span>
          </h6>
        </div>
      </div>
    );
  }
}

export default Post;
