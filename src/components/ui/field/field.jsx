import React from "react";
import { StyledInput } from "./styles";

function Field({ type, onChange, placeholder, id, ...props }) {
  return (
    <StyledInput
      placeholder={placeholder}
      id={id}
      type={type}
      onChange={onChange}
      {...props}
    />
  );
}

export default Field;
