import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import BuyPage from "/src/components/pages/buy-page/buy-page";
// import MainPage from "/src/components/pages/main-page/main-page";
import { StyledWrapper, Main } from "./styles.js";
import { Outlet } from "react-router-dom";

function PageWrapper({ features, products }) {
  return (
    <StyledWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledWrapper>
  );
}

export default PageWrapper;
