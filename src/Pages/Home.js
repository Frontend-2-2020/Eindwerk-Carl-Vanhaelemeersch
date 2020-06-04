import React, { Component } from "react";
import { connect } from "react-redux";
import "rc-pagination/assets/index.css";
import { getPosts } from "../redux/actions/postActions";
import Blogpost from "../Components/Blogpost";
import CreatePost from "../Components/CreatePost";
import Pagination from "rc-pagination";
import PropTypes from "prop-types";

class Home extends Component {
  // GETTING OUR POSTS, AND GETTING THEM AGAIN EVERY 45 SEC TO SEE IF THERE'RE NEW POSTS
  componentDidMount() {
    const { getPosts, current_page } = this.props;
    getPosts();
    setInterval(() => {
      getPosts(current_page);
    }, 45000);
  }

  // PASSING PAYLOAD, TO SHOW CHANGING IN PAGE
  onChange = (page) => {
    this.props.getPosts(page);
  };

  render() {
    const { auth, posts, current_page, total_items, per_page } = this.props;

    // LOADER WHEN WE DON'T HAVE OUR DATA YET
    if (!auth || !total_items) {
      return <div>...Loading/</div>;
    } else {
      // COMPONENTS MAKING UP OUR HOME PAGE WITH PAGINATION,
      // LIST OF POSTS AND WELCOME MESSAGE, CREATEPOST IF LOGGED IN
      return (
        <div>
          {auth.last_name && (
            <h1>Welkom terug {auth.first_name + " " + auth.last_name}</h1>
          )}
          <Pagination
            onChange={this.onChange}
            page={current_page}
            total={total_items}
            pageSize={per_page}
          />
          {auth.last_name && <CreatePost />}

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

// WHAT TO EXPECT IN OUR PROPS
Home.propTypes = {
  auth: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};
Blogpost.propTypes = {
  posts: PropTypes.array.isRequired,
};
Pagination.propTypes = {
  current_page: PropTypes.number,
  total_items: PropTypes.number,
  per_page: PropTypes.number,
};

// GETTING DATA TROUGH REACT-REDUX
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
