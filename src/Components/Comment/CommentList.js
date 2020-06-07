import React, { Component } from "react";
import { connect } from "react-redux";
import API from "../../libs/API";
import { getPosts } from "../../redux/actions/postActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../css/commentList.css";
import "../../css/buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class CommentList extends Component {
  // REMOVE SELECTED COMMENT, THEN LOAD POSTS (DIPLAY ERROR IF FAIL)
  removeComment = () => {
    const { getPostsByID, comment } = this.props;
    API.delete("https://eindwerk.jnnck.be/api/comments/" + comment.id)
      .then((response) => {
        getPostsByID();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // WHEN LOGGED IN USER = USER ID OF COMMENT, DISPLAY EDIT OR DELETE COMMENT
  // DIPLAY COMMENT AS WRITTEN BY CODEDITOR
  render() {
    const { comment, auth } = this.props;
    const name = " " + comment.user.first_name + " " + comment.user.last_name;
    return (
      <div className=" com-cont">
        {comment.user.id === auth.id && (
          <div>
            <Link to={"/editComment/" + comment.id}>
              <FontAwesomeIcon
                icon={faEdit}
                className="knop-com knop-com-edit"
              />
            </Link>
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="knop-com knop-com-delete"
              onClick={this.removeComment}
            />
          </div>
        )}
        <div
          className=" com-body"
          dangerouslySetInnerHTML={{ __html: comment.body }}
        ></div>
        <div className="com-by">
          Commented by:
          <Link
            to={"/user/" + comment.user.id}
            style={{
              textDecoration: "none",
            }}
          >
            <span className="text-muted">{name}</span>
          </Link>
        </div>
      </div>
    );
  }
}
CommentList.propTypes = {
  getPostsByID: PropTypes.func.isRequired,
  comment: PropTypes.shape({
    body: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }).isRequired,
  auth: PropTypes.object.isRequired,
};

// REDUX PART TO GET AUTH AND POSTS
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
