import React, { Component } from "react";
import { Form, Field } from "formik";
import CustomErrorMessage from "../CustomErrorMessage";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";
import "../../css/createPostForm.css";

class CreatePostForm extends Component {
  // FORM TO WRITE COMMENTS IN. IF NOT VALID, ERRORMESSAGE
  render() {
    const { values, setFieldValue } = this.props;
    return (
      <Form id="clearForm">
        <div className="form-row mt-4 ck-container">
          <label htmlFor="title"></label>
          <Field
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            required
            className="form-control ck-title"
          />
          <CustomErrorMessage name="title" />
          <div className="container-fluid">
            <CKEditor
              editor={ClassicEditor}
              data={values.body}
              onChange={(event, editor) => {
                const data = editor.getData();
                setFieldValue("body", data);
              }}
            />
            <CustomErrorMessage name="body" />

            <button type="submit" className="btn btn-primary btn-block mt-2">
              Submit
            </button>
          </div>
        </div>
      </Form>
    );
  }
}
CreatePostForm.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default CreatePostForm;
