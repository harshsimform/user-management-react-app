import React from "react";
import Input from "./Input";
import { Props } from "../interface/interfaces";
import ImageUpload from "./ImageUpload";

const FormikControl = ({ control, ...rest }: Props) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "image":
      return <ImageUpload {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
