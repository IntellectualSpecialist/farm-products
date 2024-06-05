import styled from "styled-components";
import { Section, P } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: ${(props) => props.theme.colorWhite};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Copyright = styled(P)`
  margin-left: auto;
`;
