import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection, Copyright } from "./styles.js";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Создано 2024</Copyright>
    </StyledSection>
  );
}

export default Footer;
