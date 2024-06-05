import styled from "styled-components";
import check from "/src/assets/check.svg";
import { Input } from "/src/components/styled";

export const StyledCheckbox = styled(Input)`
  appearance: none;
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:checked {
    background-color: ${(props) => props.theme.colorButton};
    background-image: url("${check}");
    background-repeat: no-repeat;
    background-position: center;
  }
`;
