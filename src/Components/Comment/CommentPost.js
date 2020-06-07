import React, { Component } from "react";
import { Formik } from "formik";
import CommentPostForm from "./CommentPostForm";
import PropTypes from "prop-types";

class CommentPost extends Component {
  // VALIDATE OUR VALUES (IF ERROR DISPLAY)
  validate = (values) => {
    const errors = {};
    const requiredFields = ["body"];
    requiredFields.forEach((field) => {
      if (!values[field]) {
        errors[field] = "required";
      }
    });
    return errors;
  };

  // ONSUBMIT FROM DETAIL, POST OUR VALUES, MAKING SURE INIT VALUE IS EMPTY WHEN COMMENTING,
  // SEPARATE FORM FOR COMPACTER CODE
  render() {
    const { onSubmit } = this.props;
    return (
      <div id="commentPost">
        <Formik
          onSubmit={onSubmit}
          // Making sure that the register form is always empty at the start
          initialValues={{
            body: "",
          }}
          validate={this.validate}
        >
          {(props) => <CommentPostForm {...props} />}
        </Formik>
      </div>
    );
  }
}
CommentPost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CommentPost;
