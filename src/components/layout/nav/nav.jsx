import React from "react";
import Button from "/src/components/ui/button/button";
import { StyledButton } from "./styles.js";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>,
  },
  {
    to: AppRoute.BUY,
    button: <Button link={AppRoute.ORDER}>Купить</Button>,
  },
];

function Nav({ ...props }) {
  const pageUrl = useLocation().pathname;
  return (
    <nav {...props}>
      {pageUrl === AppRoute.MAIN ? (
        <Button link={AppRoute.ORDER}>Купить</Button>
      ) : (
        <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
      )}
    </nav>
  );
}

export default Nav;
