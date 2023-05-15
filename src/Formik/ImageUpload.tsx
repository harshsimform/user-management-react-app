import React, { ChangeEvent, useState } from "react";
import { Props } from "../interface/interfaces";

const ImageUpload = (props: Props) => {
  const { label, name } = props;
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedImg(file || null);
    console.log(file);
  };
  return (
    <>
      <div className="formControl">
        <label htmlFor={name}>{label}</label>
        <input
          type="file"
          name={name}
          accept="image/*"
          onChange={handleImgChange}
        />
        {selectedImg && (
          <img src={URL.createObjectURL(selectedImg)} alt="Preview" />
        )}
      </div>
    </>
  );
};

export default ImageUpload;
