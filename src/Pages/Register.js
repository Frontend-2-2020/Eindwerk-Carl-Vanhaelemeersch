import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <Formik
          onSubmit={() => console.log("submit")}
          initialValues={{ first_name: "Voornaam" }}
        >
          <Form>
            <Field type="text" name="first_name" id="first_name"></Field>
            <Field type="text" name="last_name" id="last_name"></Field>
            <Field type="email" name="email" id="email"></Field>
            <Field type="color" name="color" id="color"></Field>
            <Field type="file" name="avatar" id="avatar"></Field>
            {/* "first_name" "last_name" "email" "password" "favorite_color"
            "avatar" */}
          </Form>
        </Formik>
      </div>
    );
  }
}

Register.propTypes = {};

export default Register;
