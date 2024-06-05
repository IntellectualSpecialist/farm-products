import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  width: fit-content;
  min-width: 260px;
  padding: 17px ${(props) => props.theme.indent};
  font-size: ${(props) => props.theme.fontSize};
  line-height: ${(props) => props.theme.lineHeight};
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => props.theme.colorButton};
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out,
    opacity 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    box-shadow: inset 0 4px 0 0 rgba(0, 0, 0, 0.14);
    background-color: ${(props) => props.theme.colorButtonHover};
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
    pointer-events: none;
  }
`;
