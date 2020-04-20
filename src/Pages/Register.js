import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <Formik>
          <div>
            "first_name" "last_name" "email" "password" "favorite_color"
            "avatar"
          </div>
        </Formik>
      </div>
    );
  }
}

Register.propTypes = {};

export default Register;
