import React from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { StyledSection, AboutWrapper, Text, StyledTitle } from "./styles.js";

function About() {
  return (
    <StyledSection>
      <AboutWrapper>
        <StyledTitle
          level={TitleLevel.H1}
          size={TitleSize.LARGE}
          className="about__title"
        >
          Магазин фермерских продуктов с доставкой
        </StyledTitle>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </AboutWrapper>
    </StyledSection>
  );
}

export default About;
