import React, { Component } from "react";
import Axios from "axios";
import API from "../libs/API";
import { Formik } from "formik";
import CommentPostForm from "../Components/CommentPostForm";

class EditComment extends Component {
  state = {
    comment: {},
  };

  componentDidMount() {
    this.getCommentsByID();
  }

  getCommentsByID = () => {
    const id = this.props.match.params.id;
    Axios.get("https://eindwerk.jnnck.be/api/comments/" + id)
      .then((response) => {
        this.setState({ comment: response.data });
        // console.log(this.state.comment);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  onSubmit = (values, formikFunctions) => {
    // console.log(values);
    const id = this.props.match.params.id;
    const { comment } = this.state;
    API.put("https://eindwerk.jnnck.be/api/comments/" + id, {
      body: values.body,
    })
      .then((response) => {
        // console.log(response);

        this.props.history.push("/detail/" + comment.blog_post_id);
      })
      .catch((error) => {
        console.log(error);
      });

    //Clearing form after making post
    // formikFunctions.resetForm();
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
    const { comment } = this.state;

    if (!comment.body) {
      return "Loading...";
    }
    return (
      <div className="container m-5" id="editComment">
        <Formik
          onSubmit={this.onSubmit}
          // Making sure that the values are there to edit
          initialValues={{
            body: comment.body,
          }}
          validate={this.validate}
        >
          {(props) => <CommentPostForm {...props} />}
        </Formik>
      </div>
    );
  }
}

export default EditComment;
