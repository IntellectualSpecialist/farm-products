import React from "react";
import { Dl, StyledDiv, Dd, Dt } from "./styles";

function Specifications({ specifications }) {
  return (
    <Dl>
      {specifications.map((item) => (
        <StyledDiv key={item.property}>
          <Dt>{item.property}</Dt>
          <Dd>{item.value}</Dd>
        </StyledDiv>
      ))}
    </Dl>
  );
}

export default Specifications;
