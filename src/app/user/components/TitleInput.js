// TitleInput.js
import React from "react";
import { Input } from "@nextui-org/react";

const TitleInput = ({ value, onChange, errors }) => {
  return (
    <div className="mb-6">
      <Input
        type="text"
        label="Title"
        variant="bordered"
        placeholder="Your post title"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        isInvalid={errors.titleBoolean}
        errorMessage={errors.title}
      />
    </div>
  );
};

export default TitleInput;
