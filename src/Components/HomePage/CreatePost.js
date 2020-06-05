import React, { Component } from "react";
import { Formik } from "formik";
import API from "../../libs/API";
import CreatePostForm from "./CreatePostForm";
import { withRouter } from "react-router";

class CreatePost extends Component {
  // ONSUBMIT: POST OUR VALES TO POSTS, THEN GO TO THAT POST AND RESET FORM (DISPLAY ERROR IF ANY).
  onSubmit = (values, formikFunctions) => {
    API.post("https://eindwerk.jnnck.be/api/posts", {
      title: values.title,
      body: values.body,
    })
      .then((response) => {
        this.props.history.push("/detail/" + response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
    formikFunctions.resetForm();
  };

  // VALIDATE OUR VALUES BY RETURNING ERRORS IF ANY.
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

  // INIT VALUES ALWAY EMPTY TO START. SEPERATE FORM FOR SHORTER CODE
  render() {
    return (
      <div id="createPost">
        <Formik
          onSubmit={this.onSubmit}
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
