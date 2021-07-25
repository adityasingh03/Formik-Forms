import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const FormikContainer = () => {
  const initialValues = {
    // name: "",
    // age: "",
    email: "",
    // date: "",
    // fav: "",
    // sex: "",
    // phone: [""],
  };
  const onSubmit = (props) => window.alert(JSON.stringify(props));
  const validationSchema = Yup.object({
    email: Yup.string().required("REQUIRED"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="email"
              name="email"
            />
            <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
              Submit
            </button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
