import React, { Component } from "react";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";

class CustomErrorMessage extends Component {
  // A SEPPARATE ERRORMESSAGE TO SAVE SPACE AND TIME, CAUSE IT'S ALL THE SAME
  render() {
    return (
      <ErrorMessage
        name={this.props.name}
        render={(error) => <div className=" small text-danger">{error}</div>}
      />
    );
  }
}
CustomErrorMessage.propTypes = {
  name: PropTypes.string,
};

export default CustomErrorMessage;
