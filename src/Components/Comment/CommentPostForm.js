import React, { Component } from "react";
import { Form } from "formik";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CustomErrorMessage from "../CustomErrorMessage";
import PropTypes from "prop-types";
import "../../css/buttons.css";

class CommentPostForm extends Component {
  // FORM TO WRITE COMMENTS IN. IF NOT VALID, ERRORMESSAGE
  render() {
    const { values, setFieldValue } = this.props;
    return (
      <div className="ck-cont-con">
        <Form id="clearform" style={{ color: "black" }}>
          <CKEditor
            editor={ClassicEditor}
            data={values.body}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFieldValue("body", data);
            }}
          />
          <CustomErrorMessage name="body" />
          <button type="submit" className="knop-sub knop-sub-com">
            Comment
          </button>
        </Form>
      </div>
    );
  }
}
CommentPostForm.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default CommentPostForm;
