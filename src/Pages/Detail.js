import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import CommentPost from "../Components/CommentPost";
import CommentList from "../Components/CommentList";

class Detail extends Component {
  state = {
    posts: {},
    comments: {},
  };
  componentDidMount() {
    Promise.all([this.getPostsByID(), getComments()]);
    // this.getPostsByID();
  }

  getPostsByID() {
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
  }

  render() {
    const { posts } = this.state;

    if (!posts.title) {
      return <div>...Loading</div>;
    }

    return (
      <div className="container">
        <div>IDnummer= {this.props.match.params.id}</div>
        <h1>{posts.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: posts.body }}></div>
        <p>
          <b>Created by:</b> {posts.user.first_name} {posts.user.last_name}
        </p>

        <div className="container w-50">
          {this.state.posts.comments.map((comment) => (
            <CommentList comment={comment} key={comment.id} />
          ))}
        </div>
        {/* still need to show comments */}
        {this.props.auth.last_name && <CommentPost posts={posts} />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export function getComments() {
  Axios.get("https://eindwerk.jnnck.be/api/comments")
    .then((response) => {
      this.setState({ comments: response.data });
      // console.log(this.state);
    })
    .catch((Error) => {
      console.log(Error);
    });
}
export default connect(mapStateToProps)(Detail);
