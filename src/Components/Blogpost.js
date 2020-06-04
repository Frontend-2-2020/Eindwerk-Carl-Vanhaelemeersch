import React, { Component } from "react";
import Post from "./Post";
import Loader from "./Loader";
import PropTypes from "prop-types";

class Blogpost extends Component {
  render() {
    const { posts } = this.props;

    // WHEN NO POST, LOADER. WHEN POSTS, MAP THEM
    if (!posts) {
      return <Loader />;
    } else {
      return (
        <div className="container">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      );
    }
  }
}
Blogpost.propTypes = {
  posts: PropTypes.object.isRequired,
};
export default Blogpost;
