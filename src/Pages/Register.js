import React, { Component } from "react";
import { Formik } from "formik";
import RegisterForm from "../Components/RegisterForm";
import Axios from "axios";

class Register extends Component {
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

  validate = (values) => {
    const errors = {};

    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "password",
      "favorite_color",
      // "avatar",
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

export default Register;
