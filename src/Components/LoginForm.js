import React, { Component } from "react";
import { Form, Field } from "formik";
import CustomErrorMessage from "./CustomErrorMessage";

class LoginForm extends Component {
  render() {
    return (
      <Form className="container">
        <div className="form-group mt-4">
          <label htmlFor="email">Email address</label>
          <Field
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="email@example.com"
            autofocus
            required
          />
          <CustomErrorMessage name="email" />
        </div>

        <div className="form-group mt-4">
          <label htmlFor="password">Password</label>
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

        {/* <div class="form-check mt-4">
          <Field type="checkbox" class="form-check-input" id="dropdownCheck2" />
          <label class="form-check-label" htmlFor="dropdownCheck2">
            Remember me
          </label>
        </div> */}

        <div className="form-check mt-4"></div>
        <button type="submit" className="btn btn-block btn-primary">
          Sign in
        </button>
      </Form>
    );
  }
}

export default LoginForm;
