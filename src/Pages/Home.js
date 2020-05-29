import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { getPosts } from "../redux/actions/postActions";
import Blogpost from "../Components/Blogpost";
import CreatePost from "../Components/CreatePost";

class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
    // this.props.getPage();
    setInterval(() => {
      this.props.getPosts();
    }, 25000);
  }

  onChange = (page) => {
    this.props.getPosts(page);
  };

  render() {
    const { auth, posts, current_page, last_page } = this.props;

    if (!auth && !last_page) {
      return <div>...Loading/</div>;
    } else {
      return (
        <div>
          {this.props.auth.last_name && (
            <h1>Welkom terug {auth.first_name + " " + auth.last_name}</h1>
          )}
          {this.props.auth.last_name && <CreatePost />}

          {console.log(current_page, last_page)}

          <Blogpost posts={posts} auth={auth} />

          <Pagination
            onChange={this.onChange}
            page={current_page}
            total={last_page}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    posts: state.posts.allPosts,
    current_page: state.posts.current_page,
    last_page: state.posts.last_page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // getPage: (pagenumber) => dispatch(getPage(pagenumber)),
  getPosts: (page) => dispatch(getPosts(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
