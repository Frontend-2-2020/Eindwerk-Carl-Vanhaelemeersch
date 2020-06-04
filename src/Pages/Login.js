import React, { Component } from "react";
import { Formik } from "formik";
import LoginForm from "../Components/LoginForm";
import API from "../libs/API";
import { getUser } from "../redux/actions/authActions";
import { connect } from "react-redux";

class Login extends Component {
  onSubmit = (values, formikFunctions) => {
    // POST OUR LOGIN DATA WITH CLIENT DATA TO API TO GET TOKEN, SAVE IN LOCALSTORAGE,
    // GET USER, THEN REDIRECT TO HOMEPAGE, RESETFORM
    API.post("https://eindwerk.jnnck.be/oauth/token", {
      grant_type: "password",
      client_id: 2,
      client_secret: "iwrHFPcaiQ3bZTzHEwQpYkpiuHUlbIOJ9SAI6DLI",
      username: values.email,
      password: values.password,
    })
      .then((response) => {
        window.localStorage.setItem(
          "CarlEindwerk_token",
          response.data.access_token
        );
        API.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;
        this.props.getUser();
        this.props.history.push("/");
      })
      // IN CASE WE FAIL SHOW ERROR
      .catch((error) => {
        console.log(error);
      });
    formikFunctions.resetForm();
  };

  // VALIDATE VALUES AND DISPLAY ERROR IF THERE'S ONE
  validate = (values) => {
    const errors = {};
    const requiredFields = ["email", "password"];
    requiredFields.forEach((field) => {
      if (!values[field]) {
        errors[field] = "required";
      }
    });
    return errors;
  };

  // SEPARATE OUR FORM TO OTHER COMPONENT FOR CLEARER, COMPACTER CODE
  render() {
    return (
      <Formik
        onSubmit={this.onSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
        validate={this.validate}
      >
        <LoginForm />
      </Formik>
    );
  }
}

// WHEN LOGGED IN, GETUSER
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
});

export default connect(undefined, mapDispatchToProps)(Login);
