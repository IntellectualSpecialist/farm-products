import React from "react";
import Title, { TitleLevel } from "/src/components/ui/title/title";
import { P } from "/src/components/styled";
import {
  Header,
  StyledIcon,
  FeatureFarmCategory,
  FeatureShopCategory,
} from "./styles.js";

const Category = {
  FARM: "farm",
  SHOP: "shop",
};

const CategoryText = {
  FARM: "Фермерские продукты",
  SHOP: "Магазинные продукты",
};

function Feature({ title, text, image, alt, category }) {
  const CustomTag =
    category === Category.FARM ? FeatureFarmCategory : FeatureShopCategory;
  return (
    <>
      <Header>
        <StyledIcon src={image} width={52} height={52} alt={alt} />
        <div className="feature__info">
          {category ? (
            <CustomTag className="feature__category">
              {category === Category.FARM
                ? CategoryText.FARM
                : CategoryText.SHOP}
            </CustomTag>
          ) : null}
          <Title level={TitleLevel.H3} className="feature__title">
            {title}
          </Title>
        </div>
      </Header>
      <P dangerouslySetInnerHTML={{ __html: text }} />
    </>
  );
}

export default Feature;
