import React, { Component } from "react";
import { Formik } from "formik";
import LoginForm from "../Components/LoginForm";

class Login extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

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
        <LoginForm />
      </Formik>
    );
  }
}

export default Login;
