import React, { Component } from "react";
import { connect } from "react-redux";
import "rc-pagination/assets/index.css";
import { getPosts } from "../redux/actions/postActions";
import Blogpost from "../Components/Blogpost";
import CreatePost from "../Components/CreatePost";
import Pagination from "rc-pagination";

class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
    setInterval(() => {
      this.props.getPosts();
    }, 25000);
  }

  onChange = (page) => {
    this.props.getPosts(page);
  };

  render() {
    const { auth, posts, current_page, total_items, per_page } = this.props;

    if (!auth || !total_items) {
      return <div>...Loading/</div>;
    } else {
      return (
        <div>
          {this.props.auth.last_name && (
            <h1>Welkom terug {auth.first_name + " " + auth.last_name}</h1>
          )}
          {this.props.auth.last_name && <CreatePost />}

          {console.log(current_page, total_items, per_page)}

          <Blogpost posts={posts} />

          <Pagination
            onChange={this.onChange}
            page={current_page}
            total={total_items}
            pageSize={per_page}
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
    total_items: state.posts.total_items,
    per_page: state.posts.per_page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) => dispatch(getPosts(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
