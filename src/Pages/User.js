import React, { Component } from "react";
import Axios from "axios";
import UserPage from "../Components/UserPage";
import UserPostList from "../Components/UserPostList";
import UserCommentList from "../Components/UserCommentList";

class User extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.getUsersByID();
  }

  getUsersByID = () => {
    const id = this.props.match.params.id;
    Axios.get("https://eindwerk.jnnck.be/api/users/" + id)
      .then((response) => {
        this.setState({ user: response.data });
        console.log(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  render() {
    const { user } = this.state;

    if (!user.first_name) {
      return <div>...Loading</div>;
    }

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
