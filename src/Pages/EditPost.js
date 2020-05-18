import React, { Component } from "react";

class EditPost extends Component {
  render() {
    return (
      <div>
        <div className="card mt-4" style={{ width: "50%" }}>
          <div className="card-body">
            <h1>{post.title}</h1>
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
          {post.user.id === auth.id && (
            <div>
              <span className="badge badge-info">Edit</span>
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

export default EditPost;
