import React, { Component } from "react";
import { Formik } from "formik";
import LoginForm from "../Components/LoginForm";
import API from "../libs/API";

class Login extends Component {
  onSubmit = (values) => {
    // check to see if we get our values, remove console.log later
    // console.log(values);

    // posting our login data with our client data too the api too receive our token
    API.post("https://eindwerk.jnnck.be/oauth/token", {
      grant_type: "password",
      client_id: 2,
      client_secret: "iwrHFPcaiQ3bZTzHEwQpYkpiuHUlbIOJ9SAI6DLI",
      username: values.email,
      password: values.password,
    })

      // After reciving token, store it in localStorage to use it afterwords and we redirect ot the homepage
      .then((response) => {
        //checking data, remove later
        // console.log(response);

        window.localStorage.setItem(
          "CarlEindwerk_token",
          response.data.access_token
        );
        API.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;
        this.props.history.push("/");
      })
      // In case we fail, we show our error in the login
      .catch((error) => {
        console.log(error);
      });
    // console.log(values.email, values.password);
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
