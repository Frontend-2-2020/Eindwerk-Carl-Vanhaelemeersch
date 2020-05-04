import React, { Component } from "react";

import Axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/authActions";

class Home extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return <div></div>;
  }
}

// const mapStateToProps = (state) => {
//   userData: state;
// };

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
});

export default connect(undefined, mapDispatchToProps)(Home);
