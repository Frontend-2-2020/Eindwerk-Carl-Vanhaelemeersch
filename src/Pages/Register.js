import React, { Component } from "react";
import { Formik } from "formik";
import RegisterForm from "../Components/RegisterForm";
import Axios from "axios";

class Register extends Component {
  // POSTING VALUES TO API/USERS THEN IF SUCCESFULL? REDIRECT TO LOGIN PAGE,
  // IF NOT, DISPLAY ERRORS IN CONSOLE
  onSubmit = (values, formikFunctions) => {
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

    //RESET VALUES FORM
    formikFunctions.resetForm();
  };

  // VALIDATING OUR VALUES
  validate = (values) => {
    const errors = {};
    const bits = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const requiredFields = [
      "first_name",
      "last_name",
      "password",
      "favorite_color",
    ];

    //WRITING SHORT LOOP TO ADD ERROR CODE TO EACH FIELD
    requiredFields.forEach((field) => {
      if (!values[field]) {
        errors[field] = "required";
      }
    });

    //WRITING EMAIL VALIDATOR FOR LEGAL EMAILS
    if (!values.email) {
      errors.email = "Required";
    } else if (!bits.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // WHEN CONDITIONS NOT MET, RETURN ERROR
    return errors;
  };

  render() {
    return (
      <div className="container">
        <Formik
          onSubmit={this.onSubmit}
          // MAKING SURE FORM IS ALWAYS EMPTY AT THE START
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            favorite_color: "#03fcf0",
          }}
          validate={this.validate}
        >
          {/* SEPARATE FOR CLEANER AND SHORTER CODE */}
          <RegisterForm />
        </Formik>
      </div>
    );
  }
}

export default Register;
