import React, { Component } from "react";
import Axios from "axios";
import API from "../libs/API";
import { Formik } from "formik";
import CommentPostForm from "../Components/CommentPostForm";
import Loader from "../Components/Loader";

class EditComment extends Component {
  // WORKING WITH REDUX AND STATE FOR SIMPLER USE AND COMPREHENSION.
  state = {
    comment: {},
  };

  // GET CORRECT COMMENT
  componentDidMount() {
    this.getCommentsByID();
  }

  // GET CORRECT COMMENT TO CHANGE, PUT IN STATE (DISPLAY ERROR IF ANY)
  getCommentsByID = () => {
    const id = this.props.match.params.id;
    Axios.get("https://eindwerk.jnnck.be/api/comments/" + id)
      .then((response) => {
        this.setState({ comment: response.data });
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  // ONSUBMIT, PUT ADJUSTED VALUES IN CORRECT COMMENT, THEN REDIRECT TO CORRECT POST (DISPLAY ERROR IF ANY)
  onSubmit = (values) => {
    const id = this.props.match.params.id;
    const { comment } = this.state;
    API.put("https://eindwerk.jnnck.be/api/comments/" + id, {
      body: values.body,
    })
      .then((response) => {
        this.props.history.push("/detail/" + comment.blog_post_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // VALIDATE OUR VALUES AND DISPLAY ERROR WHEN NEEDED
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

    // WHEN NO COMMENT, DIPLAY LOADING
    if (!comment.body) {
      return <Loader />;
    }

    // SEPERATE FORM FOR SHORTER AND CLEARED CODE, WITH OUR INITVALUES OUR VALUES FROM THE GETCOMMENTSBYID
    return (
      <div className="container m-5" id="editComment">
        <Formik
          onSubmit={this.onSubmit}
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
