import React from "react";
import Input from "./Input";
import { Props } from "../interface/interfaces";

const FormikControl = ({ control, ...rest }: Props) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
