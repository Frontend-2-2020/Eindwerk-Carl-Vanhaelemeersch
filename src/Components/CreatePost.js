import React, { Component } from "react";
import { Formik } from "formik";
import API from "../libs/API";
import CreatePostForm from "./CreatePostForm";
import { withRouter } from "react-router";

class CreatePost extends Component {
  onSubmit = (values, formikFunctions) => {
    console.log(values);
    API.post("https://eindwerk.jnnck.be/api/posts", {
      title: values.title,
      body: values.body,
    })
      .then((response) => {
        console.log(response);
        this.props.history.push("/detail/" + response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });

    //Clearing form after making post
    formikFunctions.resetForm();
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

export default withRouter(CreatePost);
