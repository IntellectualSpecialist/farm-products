import styled from "styled-components";
import Field from "/src/components/ui/field/field";
import { P } from "/src/components/styled";
import Button from "/src/components/ui/button/button";

export const StyledForm = styled.form`
  ${(props) => props.gridStart && `grid-column-start: ${props.gridStart};`}
  ${(props) => props.gridEnd && `grid-column-end: ${props.gridEnd};`}
  margin-bottom: 20px;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledField = styled(Field)`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PriceTitle = styled(P)`
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 8px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 32px;
`;

export const StyledLabel = styled.label`
  cursor: pointer;
`;
