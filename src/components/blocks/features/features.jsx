import React from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Feature from "/src/components/ui/feature/feature";
import { AppRoute } from "/src/const";
import {
  StyledSection,
  StyledTitle,
  StyledList,
  FarmItem,
  ShopItem,
  StyledButton,
} from "./styles.js";

function Features({ features }) {
  return features?.length ? (
    <StyledSection>
      <StyledTitle level={TitleLevel.H2} size={TitleSize.BIG}>
        Почему фермерские продукты лучше?
      </StyledTitle>
      <StyledList>
        {features.map((feature) => {
          const CustomTag = feature.category === "farm" ? FarmItem : ShopItem;
          return (
            <CustomTag key={feature.id}>
              <Feature {...feature}></Feature>
            </CustomTag>
          );
        })}
      </StyledList>
      <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
    </StyledSection>
  ) : null;
}

export default Features;
