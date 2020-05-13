import React, { Component } from "react";
import API from "../libs/API";
import { Formik } from "formik";
import CommentPostForm from "./CommentPostForm";
import { getComments } from "../Pages/Detail";

class CommentPost extends Component {
  onSubmit = (values) => {
    console.log(values);
    API.post("https://eindwerk.jnnck.be/api/comments", {
      body: values.body,
      blog_post_id: this.props.posts.id,
    })
      .then((response) => {
        console.log(response);
        getComments();
      })
      .catch((error) => {
        console.log(error);
      });

    //Clearing form after making post
    document.getElementById("clearForm").reset();
  };

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
    return (
      <div className="container m-5" id="commentPost">
        <Formik
          onSubmit={this.onSubmit}
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
