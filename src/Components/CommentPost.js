import React, { Component } from "react";
// import API from "../libs/API";
import { Formik } from "formik";
import CommentPostForm from "./CommentPostForm";
// import { getComments } from "../Pages/Detail";

class CommentPost extends Component {

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
  render() {
    const { onSubmit } = this.props;
    return (
      <div className="container m-5" id="commentPost">
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

export default CommentPost;
