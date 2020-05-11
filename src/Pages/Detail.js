import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import Comments from "../Components/Comments";

class Detail extends Component {
  state = {};
  componentDidMount() {
    Axios.get(
      "https://eindwerk.jnnck.be/api/posts/" + this.props.match.params.id
    ).then((response) => {
      // console.log(response);
      this.setState(response.data);
      // console.log(this.state);
    });
  }
  render() {
    if (!this.state.title) {
      return <div>...Loading</div>;
    }
    return (
      <div className="container">
        <div>IDnummer= {this.props.match.params.id}</div>
        <h1>{this.state.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.body }}></div>
        <p>
          <b>Created by:</b> {this.state.user.first_name}{" "}
          {this.state.user.last_name}
        </p>
        {this.props.auth.last_name && <Comments />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Detail);
