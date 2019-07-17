import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../formHelpers/validate";
import renderField from "../formHelpers/renderField";
import renderCheckbox from "../formHelpers/renderCheckbox";

const NewCourseFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="Key concepts"
        type="text"
        component={renderField}
        label="Key Concept"
      />
      <div>
        <label htmlFor="prerequisites">prerequisites</label>
        <div>
          <Field name="IoT" id="IoT" component={renderCheckbox} />
          <Field name="ML" id="ML" component={renderCheckbox} />
          <Field name="AI" id="AI" component={renderCheckbox} />
          <Field name="Cloud" id="Cloud" component={renderCheckbox} />
          <Field name="Dev Ops" id="Dev Ops" component={renderCheckbox} />
          <Field
            name="Infrastructure"
            id="Infrastructure"
            component={renderCheckbox}
          />
          <Field name="Corgi" id="employed" component={renderCheckbox} />
        </div>
      </div>

      <Field name="Price" type="text" component={renderField} label="Price" />

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "NewCourseForm", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(NewCourseFormThirdPage);
