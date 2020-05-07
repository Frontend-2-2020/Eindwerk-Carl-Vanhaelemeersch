import React, { Component } from "react";

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <div className="card mt-4" style={{ width: "50%" }}>
          <div className="card-body">
            <h5
              className="card-title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            ></h5>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.body }}
            ></p>
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
