import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";

class Register extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

  validate = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "required";
    }
    if (!values.last_name) {
      errors.last_name = "required";
    }
    if (!values.email) {
      errors.email = "required";
    }
    if (!values.password) {
      errors.password = "required";
    }
    if (!values.favorite_color) {
      errors.favorite_color = "required";
    }
    if (!values.avatar) {
      errors.avatar = "required";
    }
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
          <Form>
            <div className="form-row">
              <div className="col-md-6">
                <ErrorMessage name="first_name" />
                <label>Voornaam</label>
                <Field
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Voornaam"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <ErrorMessage name="last_name" />
                <label>Achternaam</label>
                <Field
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Achternaam"
                  required
                  className="form-control"
                />
              </div>
            </div>

            <ErrorMessage name="email" />
            <label>Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              required
              className="form-control"
            />

            <ErrorMessage name="password" />
            <label>Wachtwoord</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="example123"
              required
              className="form-control"
            />

            <div className="form-row">
              <div className="col-md-6">
                <ErrorMessage name="favorite_color" />
                <label>Favoriete Kleur</label>
                <Field
                  type="color"
                  name="favorite_color"
                  id="favorite_color"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <ErrorMessage name="avatar" />
                <label>Avatar</label>
                <Field
                  type="file"
                  name="avatar"
                  id="avatar"
                  required
                  className="form-control"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary float-right">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}
Register.propTypes = {};

export default Register;
