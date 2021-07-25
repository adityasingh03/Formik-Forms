import React from "react";
import Input from "./Input";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
    case "textarea":
    case "checkbox":
    case "date":
    case "radio":
    default:
      return null;
  }
};

export default FormikControl;
