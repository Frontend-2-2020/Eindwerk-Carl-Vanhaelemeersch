import React, { Component } from "react";
import { Form } from "formik";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CustomErrorMessage from "./CustomErrorMessage";

class CommentPostForm extends Component {
  render() {
    const { values, setFieldValue } = this.props;
    return (
      <Form id="clearform" className="mt-4">
        <CKEditor
          editor={ClassicEditor}
          data={values.body}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFieldValue("body", data);
          }}
        />
        <CustomErrorMessage name="body" />
        <button type="submit" className="btn btn-primary float-right mt-4">
          Submit
        </button>
      </Form>
    );
  }
}

export default CommentPostForm;
