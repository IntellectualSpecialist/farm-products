import React from "react";
import { StyledButton } from "./styles.js";

function Button({ children, link, className, onClick, ...props }) {
  return (
    <StyledButton
      className={className}
      {...(link ? { to: link } : { as: "button", type: "button" })}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
