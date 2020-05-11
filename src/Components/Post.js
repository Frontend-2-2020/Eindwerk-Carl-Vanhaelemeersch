import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Post extends Component {
  render() {
    const { post } = this.props;

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
            <span className="text-muted">
              {post.user.first_name + "" + post.user.last_name}
            </span>
          </h6>
        </div>
      </div>
    );
  }
}

export default withRouter(Post);
