import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { getPosts, getPage } from "../redux/actions/postActions";
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

  // onChange = (pageNumber) => {
  //   this.props.getPosts(pageNumber);
  // };

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

          {/* <Pagination
            onChange={this.onChange}
            page={this.props.current_page}
            total={this.props.last_page}
          /> */}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth, posts: state.posts };
};

const mapDispatchToProps = (dispatch) => ({
  // getPage: (pagenumber) => dispatch(getPage(pagenumber)),
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
