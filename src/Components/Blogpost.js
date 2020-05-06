import React, { Component } from "react";
import Post from "./Post";

class Blogpost extends Component {
  render() {
    const { posts } = this.props;
    // console.log("blogpost");
    // console.log(posts);

    if (!posts) {
      return <div>...Loading</div>;
    } else {
      return (
        <div>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      );
    }
  }
}

export default Blogpost;
