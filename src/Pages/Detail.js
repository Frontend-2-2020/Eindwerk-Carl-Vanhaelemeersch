import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import CommentPost from "../Components/CommentPost";
import CommentList from "../Components/CommentList";
import API from "../libs/API";

class Detail extends Component {
  state = {
    posts: {},
    comments: {},
  };
  componentDidMount() {
    this.getPostsByID();
  }

  onSubmit = (values, formikFunctions) => {
    // console.log(values);
    API.post("https://eindwerk.jnnck.be/api/comments", {
      body: values.body,
      blog_post_id: this.state.posts.id,
    })
      .then((response) => {
        console.log(response);
        // rerender our list with our previ function, but failing every time!!!
        this.getPostsByID();
      })
      .catch((error) => {
        console.log(error);
      });

    //Clearing form after making post
    formikFunctions.resetForm();
  };

  getPostsByID = () => {
    Axios.get(
      "https://eindwerk.jnnck.be/api/posts/" + this.props.match.params.id
    )
      .then((response) => {
        // console.log(response);

        this.setState({ posts: response.data });
        // console.log(this.state);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  removePostFromDetail = () => {
    API.delete("https://eindwerk.jnnck.be/api/posts/" + this.state.posts.id)
      .then((response) => {
        console.log(response.data);
        // this.props.getPosts();
        this.props.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { posts } = this.state;

    if (!posts.title) {
      return <div>...Loading</div>;
    }

    return (
      <div className="container">
        {this.state.posts.user.id === this.props.auth.id && (
          <div>
            <span className="badge badge-info">Edit</span>
            <span
              className="badge badge-danger"
              onClick={this.removePostFromDetail}
            >
              Remove
            </span>
          </div>
        )}
        <h1>{posts.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: posts.body }}></div>
        <p>
          <b>Created by:</b> {posts.user.first_name} {posts.user.last_name}
        </p>

        <div className="container w-50">
          {this.state.posts.comments.map((comment) => (
            <CommentList
              comment={comment}
              getPostsByID={this.getPostsByID}
              key={comment.id}
            />
          ))}
        </div>
        {/* still need to show comments */}
        {this.props.auth.last_name && (
          <CommentPost
            posts={posts}
            getPostsByID={this.getPostsByID}
            onSubmit={this.onSubmit}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Detail);
