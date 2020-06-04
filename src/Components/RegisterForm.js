import React, { Component } from "react";
import { Form, Field } from "formik";
import CustomErrorMessage from "./CustomErrorMessage";

class RegisterForm extends Component {
  render() {
    // DISPLAY OF OUR FORM WITH CUSTOMERRORMESSAGE IF ANY
    return (
      <Form>
        <div className="form-row mt-4">
          <div className="col-md-6">
            <label htmlFor="first_name">Voornaam</label>
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
            <label htmlFor="last_name">Achternaam</label>
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

        <label htmlFor="email" className="mt-4">
          Email
        </label>
        <Field
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          required
          className="form-control"
        />
        <CustomErrorMessage name="email" />

        <label htmlFor="password" className="mt-4">
          Wachtwoord
        </label>
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
            <label htmlFor="favorite_color">Favoriete Kleur</label>
            <Field
              type="color"
              name="favorite_color"
              id="favorite_color"
              required
              className="form-control"
            />
            <CustomErrorMessage name="favorite_color" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary float-right mt-4">
          Submit
        </button>
      </Form>
    );
  }
}

export default RegisterForm;
