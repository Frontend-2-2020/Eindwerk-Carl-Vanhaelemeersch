import React, { Component } from "react";
import { ErrorMessage } from "formik";

class CustomErrorMessage extends Component {
  render() {
    return (
      // Making a sepperate errorMessage to save space and time in our forms
      // because it's all the same error message
      <ErrorMessage
        name={this.props.name}
        render={(error) => <div className=" small text-danger">{error}</div>}
      />
    );
  }
}

export default CustomErrorMessage;
