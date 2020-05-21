import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import API from "../libs/API";
import { getPosts } from "../redux/actions/postActions";

class Post extends Component {
  removePost = () => {
    API.delete("https://eindwerk.jnnck.be/api/posts/" + this.props.post.id)
      .then((response) => {
        console.log(response.data);
        this.props.getPosts();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // updatePost(id) {
  //   this.props.history.push("/addPost/" + id);
  // }
  render() {
    const { post, auth } = this.props;
    // console.log(auth);

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
          {post.user.id === auth.id && (
            <div>
              <Link to={"/editPost/" + post.id}>
                <span className="badge badge-info">Edit</span>
              </Link>

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
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));
