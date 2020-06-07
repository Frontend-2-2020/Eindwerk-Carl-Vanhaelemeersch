import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import API from "../../libs/API";
import PropTypes from "prop-types";
import "../../css/user.css";
import "../../css/buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class UserPostList extends Component {
  // REMOVE POST, THEN GETUSER (DISPLAY ERROR IF ANY)
  removePost = () => {
    API.delete("https://eindwerk.jnnck.be/api/posts/" + this.props.posts.id)
      .then((response) => {
        console.log(response.data);
        this.props.getUsersByID();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { posts, auth } = this.props;

    // LIST OF POST TITLES AND IF LOGGED IN ID = POST USER ID, OPTION TO EDIT AND REMOVE POST
    return (
      <div className="usList-cont">
        <Link
          to={"/detail/" + posts.id}
          style={{
            color: "black",
          }}
        >
          <p className="usList-title">{posts.title}</p>
        </Link>
        {posts.user_id === auth.id && (
          <div className="knop-cont">
            <Link to={"/editPost/" + posts.id}>
              <FontAwesomeIcon icon={faEdit} className="knop-sm knop-sm-edit" />
            </Link>
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="knop-sm knop-sm-delete"
              onClick={this.removePost}
            />
          </div>
        )}
      </div>
    );
  }
}
UserPostList.propTypes = {
  posts: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    user_id: PropTypes.number,
  }).isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(UserPostList);
