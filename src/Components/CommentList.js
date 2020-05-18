import React, { Component } from "react";
import { connect } from "react-redux";
import API from "../libs/API";
import { getPosts } from "../redux/actions/postActions";

class CommentList extends Component {
  removeComment = () => {
    API.delete(
      "https://eindwerk.jnnck.be/api/comments/" + this.props.comment.id
    )
      .then((response) => {
        console.log(response.data);
        // this.setState((this.props.comments: response.data));
        this.props.getPostsByID();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    // console.log(this.props);
    const { comment, auth } = this.props;
    console.log(comment);
    return (
      <div className="mt-4 border border-primary rounded p-4">
        <div dangerouslySetInnerHTML={{ __html: comment.body }}></div>
        <div>
          Commented by: {comment.user.first_name} {comment.user.last_name}
        </div>
        {comment.user.id === auth.id && (
          <div>
            <span className="badge badge-info">Edit</span>
            <span className="badge badge-danger" onClick={this.removeComment}>
              Remove
            </span>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
