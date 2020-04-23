import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import CustomErrorMessage from "./CustomErrorMessage";

class RegisterForm extends Component {
  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      favorite_color,
      avatar,
    } = this.props;
    return (
      <Form>
        <div className="form-row mt-4">
          <div className="col-md-6">
            <label>Voornaam</label>
            <Field
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Voornaam"
              required
              className="form-control"
            />
            <CustomErrorMessage name="first_name" />
          </div>

          <div className="col-md-6">
            <label>Achternaam</label>
            <Field
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Achternaam"
              required
              className="form-control"
            />
            <CustomErrorMessage name="last_name" />
          </div>
        </div>

        <label className="mt-4">Email</label>
        <Field
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          required
          className="form-control"
        />
        <CustomErrorMessage name="email" />

        <label className="mt-4">Wachtwoord</label>
        <Field
          type="password"
          name="password"
          id="password"
          placeholder="example123"
          required
          className="form-control"
        />
        <CustomErrorMessage name="password" />

        <div className="form-row mt-4">
          <div className="col-md-6">
            <label>Favoriete Kleur</label>
            <Field
              type="color"
              name="favorite_color"
              id="favorite_color"
              required
              className="form-control"
            />
            <CustomErrorMessage name="favorite_color" />
          </div>

          <div className="col-md-6">
            <label>Avatar</label>
            <Field
              type="file"
              name="avatar"
              id="avatar"
              required
              className="form-control"
            />
            <CustomErrorMessage name="avatar" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary float-right mt-4">
          Submit
        </button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  //vragen of we hier een email validator moeten schrijven.
  password: PropTypes.string.isRequired,
  //vragen of we hier een password strength meter moeten schrijven
  favorite_color: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
};

export default RegisterForm;
