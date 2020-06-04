import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import CommentPost from "../Components/CommentPost";
import CommentList from "../Components/CommentList";
import API from "../libs/API";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import PropTypes from "prop-types";

class Detail extends Component {
  // WORKING WITH REDUX AND STATE FOR SIMPLER USE AND COMPREHENSION.
  state = {
    posts: {},
    comments: {},
  };
  // GETPOSTSBYID AND REFRESHING EVERY 5 SECONDS TO SEE IF THERE ARE NEW COMMENTS,
  componentDidMount() {
    this.getPostsByID();
    setInterval(() => {
      this.getPostsByID();
    }, 5000);
  }

  // POST COMMENT ON SUBMIT TO CORRECT BLOGPOST.
  // REFRESH TO LOAD NEW COMMENTS AND CLEAR FORM (DISPLAY ERROR IF THERE'S ONE)
  onSubmit = (values, formikFunctions) => {
    const { posts } = this.state;
    API.post("https://eindwerk.jnnck.be/api/comments", {
      body: values.body,
      blog_post_id: posts.id,
    })
      .then((response) => {
        this.getPostsByID();
      })
      .catch((error) => {
        console.log(error);
      });
    formikFunctions.resetForm();
  };

  // GETTING CORRECT POST TO COMMENT ON, SETTING STATE TO RESPONSE DATA (DIPLAY ERROR IF ANY)
  getPostsByID = () => {
    const id = this.props.match.params.id;
    Axios.get("https://eindwerk.jnnck.be/api/posts/" + id)
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  // REMOVING CORRECT POST, REDIRECT TO HOME (DISPLAY ERROR IF ANY)
  removePostFromDetail = () => {
    const { posts } = this.state;
    API.delete("https://eindwerk.jnnck.be/api/posts/" + posts.id)
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { posts } = this.state;
    const { auth } = this.props;

    // IF NO POST IN: GET LOADING
    if (!posts.title) {
      return <Loader />;
    }
    // DIPLAY OUR SELECTED POST AND LIST OF COMMENTS THAT CAN BE EDITED OR REMOVED IF
    // LOGGEDIN ID = WRITTEN POST/COMMENT USER ID
    // DISPLAY COMMENTS AND POST AS WRITTEN IN CODEDITOR
    return (
      <div className="container">
        {this.state.posts.user.id === this.props.auth.id && (
          <div>
            <Link to={"/editPost/" + posts.id}>
              <span className="badge badge-info">Edit</span>
            </Link>
            <span
              className="badge badge-danger"
              onClick={this.removePostFromDetail}
            >
              Remove
            </span>
          </div>
        )}
        <h1>{posts.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: posts.body }}></div>
        <p>
          <b>Created by:</b> {posts.user.first_name} {posts.user.last_name}
        </p>

        <div className="container w-50">
          {this.state.posts.comments.map((comment) => (
            <CommentList
              comment={comment}
              getPostsByID={this.getPostsByID}
              key={comment.id}
            />
          ))}
        </div>
        {/* CAN ONLY COMMENT IF LOGGED IN */}
        {auth.last_name && (
          <CommentPost
            posts={posts}
            getPostsByID={this.getPostsByID}
            onSubmit={this.onSubmit}
          />
        )}
      </div>
    );
  }
}
Detail.propTypes = {
  auth: PropTypes.object.isRequired,
  posts: PropTypes.objectOf(PropTypes.string),
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Detail);
