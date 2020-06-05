import React, { Component } from "react";
import Axios from "axios";
import UserPage from "../Components/User/UserPage";
import UserPostList from "../Components/User/UserPostList";
import UserCommentList from "../Components/User/UserCommentList";
import Loader from "../Components/Loader";

class User extends Component {
  // DECLARE STATE
  state = {
    user: {},
  };

  componentDidMount() {
    this.getUsersByID();
  }

  // GET CORRECT USER, SETSTATE USER (DISPLAY ERROR IF ANY)
  getUsersByID = () => {
    const id = this.props.match.params.id;
    Axios.get("https://eindwerk.jnnck.be/api/users/" + id)
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  render() {
    const { user } = this.state;

    // IF NO USER, DISPLAY LOADER
    if (!user.first_name) {
      return <Loader />;
    }

    // DISPLAY USER INFO WITH ALL POSTED COMMENTS AND POSTS
    return (
      <div className="container">
        <UserPage user={user} />
        <div>
          <h3>Geposte Artikelen: </h3>
          {user.blog_posts.map((posts) => (
            <UserPostList
              posts={posts}
              getUsersByID={this.getUsersByID}
              key={posts.id}
            />
          ))}
        </div>

        <div className="container">
          <h3>Geposte Comments: </h3>
          {user.comments.map((comment) => (
            <UserCommentList
              comment={comment}
              getUsersByID={this.getUsersByID}
              key={comment.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default User;
