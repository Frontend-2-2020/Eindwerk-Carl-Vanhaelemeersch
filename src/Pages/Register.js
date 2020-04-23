import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import RegisterForm from "../Components/RegisterForm";

class Register extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

  validate = (values) => {
    // console.log("validate"); Valideerd om de toetsindruk, eens vragen aan JNNCK
    const errors = {};

    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "password",
      "favorite_color",
      "avatar",
    ];

    requiredFields.forEach((field) => {
      if (!values[field]) {
        errors[field] = "required";
      }
    });

    return errors;
  };
  render() {
    return (
      <div className="container">
        <Formik
          onSubmit={this.onSubmit}
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          validate={this.validate}
        >
          <RegisterForm />
        </Formik>
      </div>
    );
  }
}
Register.propTypes = {};

export default Register;
