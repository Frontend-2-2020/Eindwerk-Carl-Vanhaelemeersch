import React, { Component } from "react";
import { Formik } from "formik";
import API from "../libs/API";
import CreatePostForm from "./CreatePostForm";

class CreatePost extends Component {
  onSubmit = (values) => {
    console.log(values);
    API.post("https://eindwerk.jnnck.be/api/posts", {
      title: values.title,
      body: values.body,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    //Clearing form after making post
    document.getElementById("clearForm").reset();
  };

  validate = (values) => {
    const errors = {};

    const requiredFields = ["title", "body"];

    requiredFields.forEach((field) => {
      if (!values[field]) {
        errors[field] = "required";
      }
    });
    return errors;
  };
  render() {
    return (
      <div className="container m-5" id="createPost">
        <Formik
          onSubmit={this.onSubmit}
          // Making sure that the register form is always empty at the start
          initialValues={{
            title: "",
            body: "",
          }}
          validate={this.validate}
        >
          {(props) => <CreatePostForm {...props} />}
        </Formik>
      </div>
    );
  }
}

export default CreatePost;
