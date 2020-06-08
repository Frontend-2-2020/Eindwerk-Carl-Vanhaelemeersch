import React, { Component } from "react";
import { Form, Field } from "formik";
import CustomErrorMessage from "./CustomErrorMessage";
import "../css/buttons.css";

class LoginForm extends Component {
  render() {
    // DISPLAY OF OUR FORM WITH CUSTOMERRORMESSAGE TO LOGIN
    return (
      <Form
        style={{ minHeight: "50vh", margin: "4em auto 0 auto", width: "70%" }}
      >
        <div className="form-group mt-4">
          <label htmlFor="email" style={{ fontWeight: "bold" }}>
            Email address
          </label>
          <Field
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="email@example.com"
            autoFocus
            required
          />
          <CustomErrorMessage name="email" />
        </div>

        <div className="form-group mt-4">
          <label htmlFor="password" style={{ fontWeight: "bold" }}>
            Password
          </label>
          <Field
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="password123"
            required
          />
          <CustomErrorMessage name="password" />
        </div>

        <div className="form-check "></div>
        <button type="submit" className="knop-sub knop-sub-home">
          Sign in
        </button>
      </Form>
    );
  }
}

export default LoginForm;
