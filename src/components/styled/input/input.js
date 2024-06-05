import styled from "styled-components";

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorGray};
  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out,
    background-image 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    pointer-events: none;
  }
`;

export default Input;
