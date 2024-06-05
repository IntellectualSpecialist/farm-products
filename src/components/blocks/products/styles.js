import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 0;
  height: 100%;
  background-color: ${(props) => props.theme.colorGray};
  overflow: hidden;
`;
