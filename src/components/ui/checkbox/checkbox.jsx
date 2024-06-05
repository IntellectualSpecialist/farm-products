import React from "react";
import { StyledCheckbox } from "./styles.js";

function Checkbox({ value, price, onChange, changeSelectProducts, ...props }) {
  return (
    <StyledCheckbox
      type="checkbox"
      value={value}
      // onChange={(e) => {
      //   onChange(e);
      //   changeSelectProducts(e);
      // }}
      onClick={changeSelectProducts}
      onChange={onChange}
      id={value}
      {...props}
    ></StyledCheckbox>
  );
}

export default Checkbox;
