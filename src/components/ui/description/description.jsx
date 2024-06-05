import React from "react";
import { Price } from "./styles";
import { P } from "/src/components/styled";

function Description({ text, price, weight }) {
  return (
    <>
      <P>{text}</P>
      <Price>
        {price} руб. / {weight} гр.
      </Price>
    </>
  );
}

export default Description;
