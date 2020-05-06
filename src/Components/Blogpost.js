import React, { Component } from "react";
import Post from "./Post";

class Blogpost extends Component {
  render() {
    const { posts } = this.props;
    console.log("blogpost");
    console.log(posts.data);

    // if (posts.data === []) {
    //   return <div>Er is iets fout gegaan</div>;
    // } else {
    //   return (
    //     <div>
    //       {posts.data.map((post) => (
    //         <Post post={post} key={post.id} />
    //       ))}
    //     </div>
    //   );
    // }
    return <div>WHYYYYYYYYYYYYY!!!!!</div>;
  }
}

export default Blogpost;
