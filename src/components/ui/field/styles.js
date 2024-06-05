import styled from "styled-components";
import { Input } from "/src/components/styled";

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 14px 12px;
  font-family: inherit;
  font-size: 14px;
  line-height: 21px;

  &::placeholder {
    color: ${(props) => props.theme.colorTextBase};
  }
`;
