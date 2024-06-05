import styled from "styled-components";
import { Section } from "/src/components/styled";
import Nav from "/src/components/layout/nav/nav";

export const StyledSection = styled(Section)`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04),
    0 10px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const StyledNav = styled(Nav)`
  margin-left: auto;
`;
