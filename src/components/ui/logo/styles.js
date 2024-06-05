import styled from "styled-components";
import { Link } from "react-router-dom";

const logoStyles = `
width: 398px;
height: 44px;
`;

export const LogoLink = styled(Link)`
  display: block;
  ${logoStyles}
`;

export const LogoMainPage = styled.div`
  ${logoStyles}
`;
