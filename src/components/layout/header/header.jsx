import React from "react";
import Logo from "/src/components/ui/logo/logo";
// import Nav from "/src/components/layout/nav/nav";
import { StyledSection, StyledNav } from "./styles.js";

function Header() {
  return (
    <StyledSection as="header">
      <Logo />
      <StyledNav />
    </StyledSection>
  );
}

export default Header;
