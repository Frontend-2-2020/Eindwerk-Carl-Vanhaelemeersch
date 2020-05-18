import React, { Component } from "react";
import { connect } from "react-redux";
// import { getUser } from "../redux/actions/authActions";
import { getPosts } from "../redux/actions/postActions";
import Blogpost from "../Components/Blogpost";
import CreatePost from "../Components/CreatePost";

class Home extends Component {
  componentDidMount() {
    // this.props.getUser();
    this.props.getPosts();
  }
  render() {
    const { auth, posts } = this.props;

    if (!auth) {
      return <div>...Loading/</div>;
    } else {
      return (
        <div>
          {this.props.auth.last_name && (
            <h1>Welkom terug {auth.first_name + " " + auth.last_name}</h1>
          )}
          {this.props.auth.last_name && <CreatePost />}

          <Blogpost posts={posts} auth={auth} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth, posts: state.posts };
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
