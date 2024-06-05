import styled from "styled-components";
import { Section } from "/src/components/styled";
import { P } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import aboutImage from "/src/assets/about-bg.svg";

export const AboutWrapper = styled.div`
  max-width: 637px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`;

export const Text = styled(P)`
  max-width: 538px;
`;

export const StyledSection = styled(Section)`
  padding-top: 183px;
  padding-bottom: 183px;
  background-color: ${(props) => props.theme.colorBgPrimary};
  background-image: url(${aboutImage});
  background-repeat: no-repeat;
  background-position: right ${(props) => props.theme.pagePadding} bottom;
`;
