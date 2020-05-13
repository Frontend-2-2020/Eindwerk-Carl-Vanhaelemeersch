import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/authActions";
import { getPosts } from "../redux/actions/postActions";
import Blogpost from "../Components/Blogpost";
import CreatePost from "../Components/CreatePost";

class Home extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getPosts();
  }
  render() {
    const { auth, posts } = this.props;
    // console.log(auth);
    return (
      <div>
        <h1>Welkom terug {auth.first_name + " " + auth.last_name}</h1>
        <CreatePost />
        <Blogpost posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth, posts: state.posts };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
