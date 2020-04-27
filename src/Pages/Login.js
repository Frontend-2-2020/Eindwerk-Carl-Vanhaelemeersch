import React, { Component } from "react";
import { Formik } from "formik";
import LoginForm from "../Components/LoginForm";
import Axios from "axios";

class Login extends Component {
  onSubmit = (values) => {
    console.log(values);
    Axios.post("https://eindwerk.jnnck.be/api/auth/token", {});
  };

  // Validating the values and displaying error message if missing
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
        {/* Seperate our the html and js for cleaner and shorter code */}
        <LoginForm />
      </Formik>
    );
  }
}

export default Login;
