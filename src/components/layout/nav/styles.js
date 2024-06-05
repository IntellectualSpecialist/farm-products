import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledButton = styled(Button)`
  background: transparent;
  color: ${(props) => props.theme.colorTextBase};

  &:hover,
  &:focus,
  &:active {
    box-shadow: none;
    background: transparent;
    opacity: 0.6;
  }

  &:active {
    box-shadow: none;
    opacity: 0.3;
  }
`;
