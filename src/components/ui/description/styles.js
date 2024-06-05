import styled from "styled-components";
// import { P } from "/src/components/styled";

export const Price = styled.span`
  display: inline-block;
  margin-top: 14px;
  padding: 4px 8px;
  font-weight: 700;
  background-color: ${(props) => props.theme.colorBgPrimary};
`;
