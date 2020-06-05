import React, { Component } from "react";
import Axios from "axios";
import { Formik } from "formik";
import CreatePostForm from "../Components/HomePage/CreatePostForm";
import API from "../libs/API";
import { withRouter } from "react-router-dom";
import Loader from "../Components/Loader";

class EditPost extends Component {
  // WORKING WITH REDUX AND STATE FOR SIMPLER USE AND COMPREHENSION.
  state = {
    post: {},
  };

  // GET CORRECT POST
  componentDidMount() {
    this.getPostsByID();
  }
  // GET CORRECT POST TO CHANGE, PUT IN STATE (DISPLAY ERROR IF ANY)
  getPostsByID = () => {
    const id = this.props.match.params.id;
    Axios.get("https://eindwerk.jnnck.be/api/posts/" + id)
      .then((response) => {
        this.setState({ post: response.data });
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  // ONSUBMIT, PUT ADJUSTED VALUES IN CORRECT POST, GETTING POSTS AGAIN,
  // THEN REDIRECT TO CORRECT POST (DISPLAY ERROR IF ANY)
  onSubmit = (values) => {
    const id = this.props.match.params.id;
    API.put("https://eindwerk.jnnck.be/api/posts/" + id, {
      title: values.title,
      body: values.body,
    })
      .then((response) => {
        this.getPostsByID();
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // VALIDATE OUR VALUES AND DISPLAY ERROR WHEN NEEDED
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

    // WHEN NO POST, DISPLAY LOADING
    if (!post.title) {
      return <Loader />;
    }
    // SEPERATE FORM FOR SHORTER AND CLEARED CODE, WITH OUR INITVALUES OUR VALUES FROM THE GETPOSTSSBYID
    return (
      <div className="container m-5" id="editPost">
        <Formik
          onSubmit={this.onSubmit}
          // Making sure that the values are there to edit
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
