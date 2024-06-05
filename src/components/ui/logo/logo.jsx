import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { LogoLink, LogoMainPage } from "./styles.js";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <LogoMainPage>
      <LogoImage
        width={390}
        height={44}
        aria-label="Логотип Фермерские продукты"
      />
    </LogoMainPage>
  ) : (
    <LogoLink to={AppRoute.MAIN}>
      <LogoImage
        width={390}
        height={44}
        aria-label="Логотип Фермерские продукты"
      />
    </LogoLink>
  );
}

export default Logo;
