import styled from "styled-components";
import { Ul } from "/src/components/styled";

export const StyledList = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const StyledButton = styled.button`
  padding: 8px 12px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.active
      ? `background-color: ${props.theme.colorFarmCategory};
        color: ${props.theme.colorWhite};`
      : `background-color: ${props.theme.colorGray};`}
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
`;
