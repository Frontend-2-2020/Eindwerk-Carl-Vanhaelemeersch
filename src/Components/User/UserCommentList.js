import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../libs/API";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../css/user.css";
import "../../css/buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class UserCommentList extends Component {
  // REMOVEPOST ON CORRECT COMMENT, THEN GETUSERSBYID (DISPLAY ERRORS IF ANY)
  removeComment = () => {
    const { getUsersByID, comment } = this.props;
    API.delete("https://eindwerk.jnnck.be/api/comments/" + comment.id)
      .then((response) => {
        getUsersByID();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DISPLAY OUR COMMENTLIST AS WRITTEN IN CODEDITOR,
  // AND IF LOGGED IN ID = COMMENT USER ID, OPTION TO EDIT AND REMOVE COMMENT
  render() {
    const { comment, auth } = this.props;
    return (
      <div className="usList-cont">
        <Link
          to={"/detail/" + comment.blog_post_id}
          style={{
            color: "black",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: comment.body }}
            className="usList-com"
          ></div>
        </Link>
        {comment.user_id === auth.id && (
          <div className="knop-cont">
            <Link to={"/editComment/" + comment.id}>
              <FontAwesomeIcon icon={faEdit} className="knop-sm knop-sm-edit" />
            </Link>
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="knop-sm knop-sm-delete"
              onClick={this.removeComment}
            />
          </div>
        )}
      </div>
    );
  }
}
UserCommentList.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    blog_post_id: PropTypes.number,
    body: PropTypes.string,
  }).isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(UserCommentList);
