import React, { Component } from "react";
import { Formik } from "formik";
import RegisterForm from "../Components/RegisterForm";
import Axios from "axios";

class Register extends Component {
  // onsubmit posting our values to api/users then if succesfull, redirect to login page. If not, display errors in console
  onSubmit = (values) => {
    console.log(values);
    Axios.post("https://eindwerk.jnnck.be/api/users", {
      first_name: values.first_name,
      last_name: values.last_name,
      favorite_color: values.favorite_color,
      avatar: "https://api.adorable.io/avatars/285/" + values.email,
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        console.log(response);
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Validating the values and displaying error message if missing
  validate = (values) => {
    const errors = {};

    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "password",
      "favorite_color",
    ];

    // Writing short loop to add error code to each field
    requiredFields.forEach((field) => {
      if (!values[field]) {
        errors[field] = "required";
      }
    });
    // returning errors if there are errors
    return errors;
  };
  render() {
    return (
      <div className="container">
        <Formik
          onSubmit={this.onSubmit}
          // Making sure that the register form is always empty at the start
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          validate={this.validate}
        >
          {/* Seperate our Forms for cleaner and shorter code */}
          <RegisterForm />
        </Formik>
      </div>
    );
  }
}

export default Register;
