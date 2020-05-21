import React, { Component } from "react";
import Axios from "axios";
import { Formik } from "formik";
import CreatePostForm from "../Components/CreatePostForm";
import API from "../libs/API";
import { withRouter } from "react-router-dom";

class EditPost extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    this.getPostsByID();
  }
  getPostsByID = () => {
    const id = this.props.match.params.id;
    Axios.get("https://eindwerk.jnnck.be/api/posts/" + id)
      .then((response) => {
        // console.log(response);

        this.setState({ post: response.data });
        // console.log(this.state);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  onSubmit = (values, formikFunctions) => {
    console.log(values);
    API.put("https://eindwerk.jnnck.be/api/posts", {
      title: values.title,
      body: values.body,
    })
      .then((response) => {
        console.log(response);
        this.props.history.push("/home");
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
    const { post } = this.state;

    if (!post.title) {
      return "Loading...";
    }
    return (
      <div className="container m-5" id="createPost">
        <Formik
          onSubmit={this.onSubmit}
          // Making sure that the register form is always empty at the start
          initialValues={{
            title: post.title,
            body: post.body,
          }}
          validate={this.validate}
        >
          {(props) => <CreatePostForm {...props} />}
        </Formik>
      </div>
    );
  }
}

export default withRouter(EditPost);
